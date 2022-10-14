import {List} from "../components/List";
import {View} from "../components/View";
import {Route} from "react-router-dom";

export const routes = [
    {
        path: "/list",
        component: List,
        routes: [
            {
                path: "/list/",
                component: View
            },
            {
                path: "/list/:id",
                component: View
            },

        ]
    },

]

export function RouteWithSubRoutes(routeProps) {
    return (
        <Route
            path={routeProps.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <routeProps.component {...props} routes={routeProps.routes} width={routeProps.width}/>
            )}
        />
    );
}
