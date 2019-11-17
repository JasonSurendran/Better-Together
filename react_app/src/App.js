//Imports
import React, {Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './actions/auth';
import setAuthToken from './utilities/setAuthToken';

//Load user token
if(localStorage.token){
  setAuthToken(localStorage.token);
}

//Main app component
//Main function to setup routes and import all other components 
const App = () => {
  //useEffect dispatches load user action
  //Run effect only once so give empty bracket as second parameter
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return(
  <Provider store ={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={ Landing }/>
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>  
      </section>   
    </Fragment>
    </Router>
    </Provider>
)};

export default App;
