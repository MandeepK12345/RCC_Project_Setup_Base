import ROUTES from '../helpers/constant'
import Login from '../Components/Login';
import Dashboard from '../Components/Dashboard'

export const pageRoutes = [
    {
        name: 'Dashboard',
        path: ROUTES.DASHBOARD,
        Component: Dashboard,
    },
    {
        name: 'Login',
        path: ROUTES.LOGIN,
        Component: Login,
    }
    
]