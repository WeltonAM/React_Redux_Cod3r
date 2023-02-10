import React, { Component } from 'react'
import Buttons from './Buttons'
import './Cont.css'

import Display from './Display'
import StepForm from './StepForm'
class Cont extends Component {

    state = {
        num: this.props.num,
        step: this.props.step || 1
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
            num: this.state.num + this.state.step
        })
    }

    dec = () => {
        this.setState({
            num: this.state.num - this.state.step
        })
    }

    setStep = (newStep) => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return (
            <div className='cont'>
                <h2>Counter</h2>
                <Display num={this.state.num} />
                
                <StepForm step={this.state.step} setStep={this.setStep} />

                <Buttons inc={this.inc} dec={this.dec} />
            </div>
        )
    }
}

export default Cont