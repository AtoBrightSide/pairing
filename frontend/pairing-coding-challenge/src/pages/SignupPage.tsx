import { useDispatch } from "react-redux";
import { useSignup } from "../services/auth/auth.service";
import { setAuthState } from "../store/usersSlice";
import { redirect } from "react-router";

export const SignupPage = () => {
    const dispatch = useDispatch();

    const { mutate: signup, isPending: signupLoading, error: signupError } = useSignup();

    const handleSignup = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        const variables = { email: String(data.email), password: String(data.password) }
        signup(variables, {
            onSuccess: (user) => {
                dispatch(setAuthState({ isAuthenticated: true, user }));
                return redirect('dashboard');
            },
            onError: () => console.error(signupError),
        });
    };
    return <>
        <h1>Sign Up form</h1>
        <form onSubmit={handleSignup}>
            {signupError && <p>{signupError.message}</p>}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />

            <button disabled={signupLoading}>Submit</button>
        </form>
    </>
}