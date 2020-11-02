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

    }
   handleSubmit(e)
   {
       e.preventDefault()
       var errors = [];
        if(this.textRef.current.value="")
        {
            this.textRef.current.style.borderColor = "red";
            errors.push("invalid username");
        }
        if(this.passRef.current.value=""||this.passRef.current.value.length<8)
        { 
            this.passRef.current.style.borderColor = "red";
                  errors.push("invaid password")
           
        }
        this.setState({error:errors})
        errors=[]
   }

    render(){
        return(
        <div>
            <ul>
              {this.state.error.map((msg,i)=>{return <li key={i}>{msg}</li>})}
            </ul>
           <form onSubmit={this.handleSubmit.bind(this)}>
         <input type="text" ref = {this.textRef}/>
         <input type="password" ref={this.passRef} />
         <button  type="submit">submit</button>
           </form>

        </div>);
    }
}

export default App15;