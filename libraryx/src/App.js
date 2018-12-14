import React, { Component,Fragment } from 'react';
import './App.css';

import Header from './UI/header/header';
import Profile from './containers/Profile/Profile';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import Home from './containers/Home/Home';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
        <Switch>
          <Route path="/profile" render={()=>{return(<Fragment><Header/><Profile/></Fragment>)}}/>
          {/* <Route path="/home" component={Home}/> */}
        </Switch>
        
        
      </BrowserRouter>
    );
  }
}

export default App;
