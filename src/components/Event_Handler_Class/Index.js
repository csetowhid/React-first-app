import React, {Component} from 'react'


class EventClass extends Component{
    constructor(props){
        super(props)
        this.state  = {
            changedValue : ''
        }
    }

    handleOnChnage = (e) => {
        this.setState({
            changedValue: e.target.value
        }, ()=>{
            console.log(this.state.changedValue);
        })
    }

    render() {
        
        return (
            <div>
                <h1>Hello Event Handler Class</h1>
                <input type="text" onChange={this.handleOnChnage} />
                <p>{this.state.changedValue}</p>
            </div>
        )
        
    }
}

export default EventClass;