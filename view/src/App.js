import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import Secret from './components/Secret/Secret'

import './App.css'

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join}/>  
            <Route path="/chat"  component={Chat} />   
            <Route path="/secrets"  component={Secret} />   
        </Router>   
    );
}

export default App;
