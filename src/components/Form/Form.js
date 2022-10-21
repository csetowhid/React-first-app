import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log('Form Is Submitted');
        let userInfo ={
            name,
            email
        }
        console.log(userInfo);
        e.preventDefault();
    }
    return (
        <div>
            <h1>Hello From Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Email</label> 
                    <input type="email" name="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </div>
    )
}