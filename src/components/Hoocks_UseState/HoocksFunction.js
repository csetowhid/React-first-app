import { useState } from "react";
import { Button } from "react-bootstrap";

export default function HoocksFunction(){
    const [count, setCount] = useState(0)
    
    const handleEvent = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h1>Hi From Hoocks {count}</h1>
            <Button onClick={handleEvent}>Increment</Button>
        </div>
    )
}