import { useState, useEffect } from "react";

export default function DynamicStyling(){
    const error = false;
    const [name, setName] = useState();
    const [validInput, setValidInput] = useState(false);

    useEffect(() => {
        if(name.length < 2){
            setValidInput(false);
        }else{
            setValidInput(true);
        }
    }, [name]);

    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            {/* <h1 style={
                { 
                    color: error ? 'red' : 'white',
                    backgroundColor: error ? 'red' : 'crimson'
                }
                }>Dynamic Styling</h1> */}

            <input 
                type="text" 
                value={name} 
                onChange={handleChange} 
                style={{ 
                    backgroundColor: validInput ? 'green' : 'red'
                }} 
             />
        </div>
    )
}