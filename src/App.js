import React, { Component } from 'react';
import './App.scss';
import Profile from './components/Profile';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ContentDetail from './components/ContentDetail/ContentDetail';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' component={()=>(<Redirect to="/Home"/>)}/>
            <Route exact path='/Home' component={Home}/>
            <Route path='/person/:name' component={Profile}/>
            <Route path='/NotFound' component={NotFound}/>
            <Route path='/ContentDetail/:id' component={ContentDetail} />
            {/* Bypass for all ther routes */}
            <Route path='*' component={()=>(<Redirect to="/NotFound"/>)}/>
          </Switch>
      </div>
    );
  }
}

export default App;
