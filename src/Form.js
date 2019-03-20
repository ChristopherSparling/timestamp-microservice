import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        const currDate = new Date()

        this.state={
            placeholder: currDate.toLocaleDateString('en-CA')
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(){

    }
    render(){
        return (
            <form>
                <label>cs.io/api/timestamp/</label>
                <input type="text" placeholder={this.state.placeholder}/>
                <button>Request</button>
            </form>
        )
    }

}

export default Form