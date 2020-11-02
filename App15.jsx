import React, { Component } from 'react';

class App15 extends Component {

    constructor(props){
        super(props)
        this.state={
            data:'',
            error:[]
        }
        this.textRef = React.createRef();
        this.passRef = React.createRef();
        this.emailRef = React.createRef();

    }
   handleSubmit(e)
   {
       e.preventDefault()
       var errors = [];
        if(this.textRef.current.value.length==0)
        {
           // this.textRef.current.style.borderColor = "red";
           console.log("value1")
            errors.push("invalid username");
        }
        if(this.passRef.current.value.length<8)
        { 
           // this.passRef.current.style.borderColor = "red";
           console.log("value2")
                  errors.push("invaid password")
           
        }
        
       if(this.emailRef.current.value.length<=2||this.emailRef.current.value.indexOf('@')<0||this.emailRef.current.value.indexOf('.')<0)
        {
            errors.push("invalid email")
        }
        this.setState({error:errors})
        errors=[]
   }

    render(){
        return(
        <div>
            <br/>
            <br />
            <ul>
              {this.state.error.map((msg,i)=>{return <li key={i}>{msg}</li>})}
              {
                  console.log(this.state.error.length)
              }
            </ul>
           <form onSubmit={this.handleSubmit.bind(this)}>
           <label>email:</label> <input type="text" ref = {this.emailRef}/>
        <label>username:</label> <input type="text" ref = {this.textRef}/>
         <label>password</label><input type="password" ref={this.passRef} />
         <button  type="submit">submit</button>
           </form>

        </div>);
    }
}

export default App15;