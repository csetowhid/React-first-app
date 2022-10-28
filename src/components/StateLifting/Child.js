import { Children } from "react"

export default function Child(props){
    // const {stateData} = props; 
    const childData = "This is Child Data";
    props.onChildData(childData);
    return (
        <div>
            <h1>State Lifting</h1>
            <p>{props.stateData}</p>
        </div>
    )
}