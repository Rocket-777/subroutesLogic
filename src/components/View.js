import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import style from "./style.module.css"

export const View = (props) => {
    const match = useRouteMatch("/list/:id");
    const display = props.width > 1000;
    const history = useHistory();
    const {id} = useParams();
    if (!!match) return (<div className={style.splitElemContent}>
        <button onClick={() => history.push('/list')}>back</button>
        <div>
            {"Display Content: " + display.toString()}
        </div>
        <div>{"Content #" + id}</div>
        <div>{"Width: " + props.width}</div>
    </div>)
    if (!!!match && display) return (
        <div className={style.splitElemContent}>
            <div>
                {"Display Content: " + !!match}
            </div>
            Select content
        </div>
    )
}
