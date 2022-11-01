import { useState } from "react";
import { Button } from "react-bootstrap";

export default function NewTodo(props){
    const [todo, setTodo] = useState('')

    const handlChange = (event) =>{
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onTodo(todo);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>New Todo</label>
                    <input type="text" name="todo" value={todo} onChange={handlChange} />
                </div>
                <div>
                    <Button type="submit">Add Todo</Button>
                </div>
            </form>
        </div>
    )
}