import React, { Component } from 'react';
import './App.scss';
import ItemProfile from './container/ItemProfile';
import Home from './container/Home';
import NotFound from './components/NotFoundPage/NotFound';
import ContentDetail from './container/ContentDetail/ContentDetail';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            {/* <Route exact path='/' component={()=>(<Redirect to="/Home"/>)}/>
            <Route exact path='/Home' component={Home}/>
            <Route path='/product/:name' component={ItemProfile}/> */}

            {/* Temporary loading page would any video item */}
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
