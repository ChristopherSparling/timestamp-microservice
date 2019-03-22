import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        const currDate = new Date()

        this.state={
            placeholder: currDate.toLocaleDateString('en-CA')
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.props.callback(res.express))
        .catch(err => console.log(err));
    }
    callBackendAPI = async () => {
      const response = await fetch('/api/timestamp/test');
      console.log(response);
      const body = await response.json();
      console.log(body)
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
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