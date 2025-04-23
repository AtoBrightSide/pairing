import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useLogin } from "../services/auth/auth.service";
import { setAuthState } from "../store/usersSlice";
import { redirect } from "react-router";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const isLoggedIn: boolean = useSelector.withTypes<RootState>()(state => state.user.isAuthenticated);

    const { mutate: login, isPending: loginLoading, error: loginError } = useLogin();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        const variables = { email: String(data.email), password: String(data.password) }

        login(variables, {
            onSuccess: (user) => {
                dispatch(setAuthState({ isAuthenticated: true, user }));
                return redirect('/dashboard');
            },
            onError: () => console.error(loginError),
        });
    };
    return <>
        <h1>{isLoggedIn ? 'logged in' : 'logged out'}</h1>
        <h1>Login Form</h1>
        <form onSubmit={handleLogin}>
            {loginError && <p>{loginError.message}</p>}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />

            <button disabled={loginLoading}>Submit</button>
        </form>
    </>
}