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
import ScrollToTop from './components/ScrollToTop';
import ResultDetail from './components/Detailed-pages/ResultDetail';
import LatestJobDetail from './components/Detailed-pages/LatestJobDetail';
import SyllabusDetail from './components/Detailed-pages/SyllabusDetail';
import AdmitCardDetail from './components/Detailed-pages/AdmitCardDetail';
import AnsKeyDetail from './components/Detailed-pages/AnsKeyDetail';
import ImportantDetail from './components/Detailed-pages/ImportantDetail';



const App = () => {
  return (
    <>
      <Topheader />
      <Menu />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/latestjob" component={Latestjob} />
        <Route path="/admitcard" component={Admitcard} />
        <Route path="/result" component={Result} />
        <Route path="/answerkey" component={Answerkey} />
        <Route path="/syllabus" component={Syllabus} />
        <Route path="/contact" component={Contactus} />
        <Route path="/about" component={About} />
        <Route path="/resultdetail" component={ResultDetail} />
        <Route path="/latestjobdetail" component={LatestJobDetail} />
        <Route path="/syllabusbsdetail" component={SyllabusDetail} />
        <Route path="/admitcarddetail" component={AdmitCardDetail} />
        <Route path="/anskeydetail" component={AnsKeyDetail} />
        <Route path="/impdetail" component={ImportantDetail} />

        <Redirect to='/' />
      </Switch>

    </>
  )
}

export default App;