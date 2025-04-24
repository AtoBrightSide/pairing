import { useDispatch } from "react-redux";
import { useLogin } from "../services/auth/auth.service";
import { setAuthState } from "../store/usersSlice";
import { useNavigate } from "react-router";

import classes from './LoginPage.module.css'

export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mutate: login, isPending: loginLoading, error: loginError } = useLogin();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        const variables = { email: String(data.email), password: String(data.password) }

        login(variables, {
            onSuccess: (user) => {
                dispatch(setAuthState({ isAuthenticated: true, user }));
                navigate('/')
            },
            onError: () => console.error(loginError),
        });
    };
    return <div className={classes.container}>
        {/* <h1>{isLoggedIn ? 'logged in' : 'logged out'}</h1> */}
        <h1 className={classes.title}>Login Form</h1>
        <form onSubmit={handleLogin} className={classes.form}>
            {loginError && <p>{loginError.message}</p>}
            <label className={classes.label} htmlFor="email">Email</label>
            <input className={classes.input} type="email" name="email" id="email" />

            <label className={classes.label} htmlFor="password">Password</label>
            <input className={classes.input} type="password" name="password" id="password" />

            <button disabled={loginLoading}>Submit</button>
        </form>
    </div>
}