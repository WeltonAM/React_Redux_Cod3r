import React, { Component } from 'react'

class Cont extends Component {

    state = {
        num: this.props.num
    }

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         num: this.props.num
    //     }

    //     this.inc = this.inc.bind(this)

    // }

    inc = () => {
        this.setState({
            num: this.state.num + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <h3>{this.state.num}</h3>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
}

export default Cont