import React from 'react';

// class App3 extends React.Component {
//     render()
//     {
//         return (<div><h1>{this.props.empid}</h1><h2>{this.props.ename}</h2> </div>)
//     }
// }
// export default App3;
import PropTypes from 'prop-types'
function App3(){
    return <Greeting name="Eshan" />
}

function Greeting(props){
    return(
        <p>
            Hello I'm {props.name}, a{props.age} years old {props.occupation}
        </p>
    )
}
Greeting.propTypes={
    name: PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    occupation:PropTypes.string.isRequired
}

 export default App3;