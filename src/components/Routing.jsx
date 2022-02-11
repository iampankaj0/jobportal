import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from './Home';
import About from './About';
import Latestjob from './Latestjob';
import Admitcard from './Admitcard';
import Result from './Result';
import Answerkey from './Answerkey';
import Notice from './Notice';
import Contactus from './Contactus';




const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/latestjob" component={Latestjob} />
                <Route path="/admitcard" component={Admitcard} />
                <Route path="/result" component={Result} />
                <Route path="/answerkey" component={Answerkey} />
                <Route path="/notice" component={Notice} />
                <Route path="/contact" component={Contactus} />
                <Route path="/about" component={About} />
            </Switch>
        </>
    )
}

export default Routing;