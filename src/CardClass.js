import React, {Component} from 'react'

class Card1 extends Component{
    render() {
        return (
            <div>
                <h3>Hello From Card component</h3>
                <p>{this.props.name}</p>
            </div>
        
        )
    }
}

export default Card1;