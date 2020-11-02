import React,{  Component} from "react";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import htmlContent from './contact.html'
class App11 extends React.Component {
    render() {
      return (
      <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav>
            <ul >
              <li><Link to={'/'} > Home </Link></li>
              <li><Link to={'/contact'} >Contact</Link></li>
              <li><Link to={'/about'} >About</Link></li>
                <li><Link to={'/signin'} >SignIn</Link></li>
              <li><Link to={'/signup'} >SignUp</Link></li>    
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={signUp} />
                
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
class Home extends React.Component {
        render() {
          return (
              <div>
                <h2>Home</h2>
              </div>
          );
        }
      }
    
    
    class About extends React.Component {
            render() {
              return (
                  <div>
                    <h2>About</h2>
                  </div>
              );
            }
          }
        
        class Contact extends React.Component {
                render() {
                  return (
                      <div>
                        <h2>Contact</h2>
                              <div dangerouslySetInnerHTML = {{__html: htmlContent}}></div>
                      </div>
                  );
            }
        }
  
   
   class SignIn extends Component {
       render() {
           return (
               <div>
                   
                   <h1>SignIn</h1>
               </div>
           );
       }
   }
   class signUp extends Component {
       render() {
           return (
               <div>
                   <h1>SignUp</h1>
               </div>
           );
       }
   }
   
   
        export default App11