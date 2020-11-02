import React, { Component } from 'react';

class App14 extends Component {

    constructor(props){
        super(props)
        this.state={
            data:''
        }
        this.clearInput=this.clearInput.bind(this);
        this.updateState = this.updateState.bind(this)
    }
    updateState(e)
    { console.log("state updated1")

        this.setState({data:e.target.value});
       
    }
    clearInput(){
        console.log("clearInput is called")
      //  this.refs.myInput.value="";
        this.setState({data:""});
       // console.log(this.refs.myInput)
    }

    render(){
        return(
        <div>
            Enter text here <input type="text" ref="myInput" value={this.state.data} onInput={this.updateState}></input>
            <button onClick={this.clearInput}>CLEAR INPUT</button>

        </div>);
    }
}

export default App14;