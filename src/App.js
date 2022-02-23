import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Topheader from './components/Topheader';

import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Latestjob from './components/Latestjob';
import Admitcard from './components/Admitcard';
import Result from './components/Result';
import Answerkey from './components/Answerkey';
import Syllabus from './components/Syllabus';
import Contactus from './components/Contactus';



const App = () => {
  return (
    <>
      <Topheader />
      <Menu />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/latestjob" component={Latestjob} />
        <Route path="/admitcard" component={Admitcard} />
        <Route path="/result" component={Result} />
        <Route path="/answerkey" component={Answerkey} />
        <Route path="/syllabus" component={Syllabus} />
        <Route path="/contact" component={Contactus} />
        <Route path="/about" component={About} />
        <Redirect to='/' />
      </Switch>

    </>
  )
}

export default App;