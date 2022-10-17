import {List} from "../components/List";
import {View} from "../components/View";
import {Route} from "react-router-dom";

export const routes = [
    {
        path: "/list",
        component: (props) => <List routes={props.routes}/>,
        routes: [
            {
                path: "/list",
                component: View,
                exact: true
            },
            {
                path: "/list/:id",
                component: View,
                exact: true
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
                <routeProps.component {...props} routes={routeProps.routes}/>
            )}
        />
    );
}
