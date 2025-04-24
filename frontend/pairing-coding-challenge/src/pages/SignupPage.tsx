import { useDispatch } from "react-redux";
import { useSignup } from "../services/auth/auth.service";
import { setAuthState } from "../store/usersSlice";
import { useNavigate } from "react-router";

import classes from './SignupPage.module.css';
import { validatePassword } from "../util/utils";
import { useState } from "react";

export const SignupPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { mutate: signup, isPending, isError, error } = useSignup();

    const [inValidInput, setInValidInput] = useState(false);

    const handleSignup = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        const variables = { email: String(data.email), password: String(data.password) }

        if (validatePassword(String(data.password))) {
            signup(variables, {
                onSuccess: (user) => {
                    dispatch(setAuthState({ isAuthenticated: true, user }));
                    navigate('/')
                },
                onError: () => console.error(error),
            });
        } else {
            setInValidInput(true);
        }
    };

    if (isError) {

    }

    return <div className={classes.container}>
        <h1>Create Account</h1>
        <form onSubmit={handleSignup}>
            {error && <p className={classes.error}>{error.message}</p>}
            {inValidInput && (
                <div className={classes['validation-errors']}>
                    <p>Make sure you satisfy the following criteria:</p>
                    <ul>
                        <li>One digit (0 - 9)</li>
                        <li>One upper case letter (A-Z)</li>
                        <li>One lower case letter (a-z)</li>
                        <li>{`One special character (!@#$%^&*(),.?":{}|<>)`}</li>
                    </ul>
                </div>
            )}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required min={6} max={10} />

            <div className={classes.buttons}>
                <button type="reset" disabled={isPending} className={classes.reset}>Reset</button>
                <button disabled={isPending}>{isPending ? 'Submitting ...' : 'Submit'}</button>
            </div>
        </form>
    </div>
}