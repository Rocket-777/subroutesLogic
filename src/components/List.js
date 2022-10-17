import {Switch, useHistory, useParams, useRouteMatch} from "react-router-dom";
import {RouteWithSubRoutes} from "../routes/routes";
import {useState} from "react";
import style from "./style.module.css"

export const List = ({routes}) => {
    const match = useRouteMatch("/list/:id");
    const [width, setWidth] = useState(window.innerWidth);
    const displayList = width > 1000 ? true : !match;
    window.onresize = () => setWidth(window.innerWidth);
    const valuesArr = ['1', '2', '3', '4', '5']
    const history = useHistory();

    if (displayList) return (<div className={style.container}>
            <div className={style.splitElem}>
                <div>
                    {"Display List: " + displayList.toString()}
                </div>
                <div>
                    List
                </div>
                {valuesArr.map(item => {
                    return <button key={item} onClick={() => {
                        history.push(`/list/${item}`)
                    }}>{"Content #" + item}
                    </button>
                })}
                <div>
                    {"Width: " + width}
                </div>
            </div>
            <Switch>
                {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} width={width}/>))}
            </Switch>

        </div>)
    if (!displayList) return (<div className={style.container}>
            <Switch>
                {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} width={width}/>))}
            </Switch>
        </div>)
}


