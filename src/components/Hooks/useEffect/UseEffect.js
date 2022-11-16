import { useState } from "react"

const useEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('useeffect');
    })

    const handleOnClick = () => {
        setCount((count) => count +1);
    };
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => {setCount(count => count + 1)}}>+</button>
        </div>
    )
}

export default useEffect