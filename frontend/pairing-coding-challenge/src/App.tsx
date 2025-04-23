import { Outlet } from 'react-router'
import classes from './App.module.css';
import { MainLayout } from './layout/MainLayout'

function App() {
  return (
    <div className={classes.root}>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  )
}

export default App
