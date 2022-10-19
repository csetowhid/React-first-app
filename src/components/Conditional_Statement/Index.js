import React, {Component} from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

class Conditional extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn : true
        }

    }
    render() {
        const {isLoggedIn} = this.state;
        let element;
        // element = isLoggedIn ? <HomePage /> : <LoginPage />

        // if(isLoggedIn){
        //     element = <HomePage />
        // }
        // element = <LoginPage />
        
        return (
            <div>
                {/* {element} */}
                {isLoggedIn ? <HomePage /> : <LoginPage />}
                {/* {isLoggedIn && <HomePage />} */}
            </div>
        )
        
    }
}

export default Conditional;