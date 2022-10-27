import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Form(){
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [user, setUser] = useState({name : '', email: ''});

    const {name, email} = user;

    //  const handleNameChange = (e) => {
    //     setUser({name: e.target.value, email});
    //  }

    //  const handleEmailChange = (e) => {
    //     setUser({name, email : e.target.value});
    //  }

     const handlChange = (e) => {
        const fieldName = e.target.name;

        setUser({...user,[e.target.name]:e.target.value});

        // if(fieldName === 'name'){
        //     setUser({name: e.target.value, email});
        // }
        // if(fieldName === 'email'){
        //     setUser({name, email : e.target.value});
        // }
        e.preventDefault();
     }
    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }
    const handleSubmit = (e) => {
        console.log('Form Is Submitted');
        // let userInfo ={
        //     name,
        //     email
        // }
        console.log(user);
        e.preventDefault();
    }
    return (
        <div>
            <h1>Hello From Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    {/* <input type="text" name="name" value={name} onChange={handleNameChange} /> */}
                    <input type="text" name="name" value={name} onChange={handlChange} />
                </div>
                <div>
                    <label>Email</label> 
                    {/* <input type="email" name="email" value={email} onChange={handleEmailChange} /> */}
                    <input type="email" name="email" value={email} onChange={handlChange} />
                </div>
                <div>
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </div>
    )
}