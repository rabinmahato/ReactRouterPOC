import React, { Component } from 'react';
import './App.scss';
import NotFound from './components/NotFoundPage/NotFound';
import ContentDetail from './container/ContentDetail/ContentDetail';
import SplashScreen from './splash';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            {/* Temporary loading page would any video item */}
            <Route exact path="/splash" component={SplashScreen} />
            <Route exact path='/' component={()=>(<Redirect to="/Content/0-0-2481"/>)}/> 
            <Route exact path='/NotFound' component={NotFound}/>
            <Route exact path='/Content/:id' component={ContentDetail} />
            {/* Bypass for all ther routes */}
            <Route path='*' component={()=>(<Redirect to="/NotFound"/>)}/>
          </Switch>
      </div>
    );
  }
}

export default App;
