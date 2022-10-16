import {Switch, useHistory} from "react-router-dom";
import {RouteWithSubRoutes} from "./routes/routes";
import {routes} from "./routes/routes";
import {useEffect} from "react";
function App() {
    const history = useHistory();
    useEffect(()=>{
        history.push('/list');
    },[])
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    );
}

export default App;
