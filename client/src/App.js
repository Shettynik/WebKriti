import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Event from './components/Event';
import Home from './components/Home';
import Council from './components/Council';
import Login from './components/Login';
import EventForm from './components/EventForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <PrivateRoute path="/createEvent/:councilName" exact component={EventForm} />
          <PrivateRoute path="/updateEvent/:councilName/:eventName" exact component={EventForm} />
          <PrivateRoute path="/deleteEvent/:councilName/:eventName" exact component={DeleteEvent} />
          <PrivateRoute path="/addMember/:councilName" exact component={AddMember} */}
          <Route path="/createEvent/:councilName" exact component={EventForm} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/:councilName" exact component={Council} />
          <Route path="/:councilName/:eventName" exact component={Event} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
