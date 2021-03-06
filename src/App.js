import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notification from './pages/Notification';
import TimetableOverview from './pages/TimetableOverview';
import NewIdeaForm from './pages/NewIdeaForm';
import Speaker from './components/Speaker';
import SignUp from './pages/SignUp';
import TalkDetails from './pages/TalkDetails';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/notification' component={Notification} />
          <Route exact path='/timetable' component={TimetableOverview} />
          <Route path='/timetable/details/new' component={NewIdeaForm} />
          <Route exact path='/timetable/details' component={TalkDetails} />
          <Route path='/notification' component={Notification} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
