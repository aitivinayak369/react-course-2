import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import App1 from './App1.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App15 from './App15.jsx'
import './file.css'
import './style.scss'
var count=5;
var Element  = (<h1>{count}</h1>)

ReactDOM.render( < App15 />,document.getElementById("app"))

// ReactDOM.render(< App1 />,document.getElementById("app1"))
// ReactDOM.render(< App2 />,document.getElementById("app2"))