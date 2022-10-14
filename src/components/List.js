import {Switch, useRouteMatch} from "react-router-dom";
import { RouteWithSubRoutes} from "../routes/routes";
import {useState} from "react";

export const List = ({routes}) => {
    const match = useRouteMatch("/list/:id");
    const [width, setWidth] = useState(window.innerWidth);
    const displayList = width > 1000 ? true : !match;
    window.onresize = () => setWidth(window.innerWidth);

    return(
        <div>
            <div>{"Display List: " + displayList.toString()}</div>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} width={width}/>
                ))}
            </Switch>
        </div>
    )
}
