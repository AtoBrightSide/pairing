import { ReactNode } from "react"
import { Header } from "./Header"

import classes from './MainLayout.module.css'

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <main className={classes.main}>
        <Header />
        {children}
    </main>
}