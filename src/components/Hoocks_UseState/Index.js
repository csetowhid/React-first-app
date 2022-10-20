import React, {Component} from 'react'
import { Button } from 'react-bootstrap';


class HoockState extends Component{
    constructor(props){
        super(props)
        this.state  = {
            count : 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        
        return (
            <div>
                <h1>Hello Hoocks Use State</h1>
                <p>{this.state.count}</p>
                <Button onClick={this.handleIncrement}>Increment</Button>
            </div>
        )
        
    }
}

export default HoockState;