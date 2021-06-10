import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './pages/Usecase_16/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" exact component={SignIn}></Route>
      </Switch>
    </Router>
  );
}

export default App;
