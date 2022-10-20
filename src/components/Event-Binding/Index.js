import React, {Component} from 'react'


class EventBinding extends Component{
    constructor(props){
        super(props)
        this.state  = {
            count : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick = () => {
    //     this.setState({
    //         count: this.state.count+1
    //     })
    // }

    handleClick(){
        this.setState({
            count: this.state.count+1
        })

    }

    render() {
        
        return (
            <div>
                <h1>Hello Event Bnding </h1>
                <h2>{this.state.count}</h2>
                {/* <button onClick={this.handleClick.bind(this)}>Click Me</button> */}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
        
    }
}

export default EventBinding;