import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './pages/Usecase_16/SignIn';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/sign-in" exact component={SignIn}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
