//Layout
import Layout from '../layout/layout';

//Paginas
import Home from '../pages/Principal';
import Personal from '../pages/Personal';
import Error404 from '../pages/Error404';

const routes = [{
    path: "/",
    component: Layout,
    exact: false,
    routes: [{
            path: "/",
            component: Home,
            exact: true
        },
        {
            path: "/Descripcion",
            component: Personal,
            exact: true
        },
        {
            component: Error404
        }
    ]
}];

export default routes;