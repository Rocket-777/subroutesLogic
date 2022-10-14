import {useHistory, useRouteMatch} from "react-router-dom";

export const View = (props) => {
    const match = useRouteMatch("/list/:id");
    const display = !!match || props.width > 1000;
    const history = useHistory();

    return (<div>
        <div>
            {!!match ? "Display Content: " + display.toString() : "Display Placeholder: " + display.toString()}
        </div>
        <div>{props.width}</div>
        {!!match ? <button onClick={() => history.goBack()}>back</button> :
            <button onClick={() => history.push('1')}>content</button>}
    </div>)
}
