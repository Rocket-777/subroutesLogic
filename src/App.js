import {Switch} from "react-router-dom";
import {RouteWithSubRoutes} from "./routes/routes";
import {routes} from "./routes/routes";
function App() {

    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    );
}

export default App;
