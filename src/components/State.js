import { Component } from "react"
import Button from 'react-bootstrap/Button';

class State extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
    }
    handleIncrement = () =>{
        this.setState({
            count: this.state.count+1
        })
    }
    handleDncrement = () =>{
        this.setState({
            count : this.state.count-1
        })
    }
    render(){
        const {count} = this.state;
        return (
            <div>
                <h1>Count : {count}</h1>
                <Button variant="success" onClick={this.handleIncrement}>+</Button>
                <Button variant="danger" onClick={this.handleDncrement} disabled={count===0 ? true : false}>-</Button>
            </div>
        )
    }
}

export default State;