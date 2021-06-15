import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './pages/Usecase_16/SignIn';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import SignUp from './pages/Usecase_7/SignUp';
import Main from './pages/Usecase_3/Main';
import Marks from './pages/Usecase_5/Marks';
import Courses from './pages/Usecase_1/Courses';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/sign-in" exact component={SignIn}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/sign-up" exact component={SignUp}></Route>
        <Route path="/subjects" exact component={Main}></Route>
        <Route path="/marks" exact component={Marks}></Route>
        <Route path="/courses" exact component={Courses}></Route>
      </Switch>
    </Router>
  );
}

export default App;
