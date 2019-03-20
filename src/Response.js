import React, { Component } from 'react';

class Response extends Component {
    constructor(){
        super()
        
        this.state={
            placeholder: Date()
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(){

    }
    render(){
        return (
            <div>Response</div>
        )
    }

}

export default Response