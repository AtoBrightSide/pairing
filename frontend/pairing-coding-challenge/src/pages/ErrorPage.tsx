import { useNavigate } from 'react-router';
import classes from './ErrorPage.module.css'

export const ErrorPage = () => {
    const navigate = useNavigate();

    return <div className={classes.errorContainer}>
        <h1 className={classes.errorTitle}>Oops!</h1>
        <p className={classes.errorMessage}>This page doesnt exist 🚫</p>
        <button className={classes.homeButton} onClick={() => navigate("/")}>
            Go to Home
        </button>
    </div>

}