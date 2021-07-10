import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../components/Home';
import SignIn from '../../components/Signin';
import SignUp from '../../components/Signup';
import Navbar from '../../components/HomeNavbar';

const WelcomePage = ({setToken}) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route 
          exact path="/sign-in" 
          render={(props) => <SignIn {...props} setToken={setToken} />} 
        ></Route>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/sign-up" component={SignUp} ></Route>
      </Switch>
    </Router>
  );
}

export default WelcomePage;