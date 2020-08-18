import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import Form from './components/form';
import Assign from './components/table2';

class Routes extends Component {
    state = {  }
    render() { 
        return (  
            <Router history={history}>
                <Switch>
                    <Route path='/userlist' component={Assign}/>
                    <Route path='/form' component={Form}/>
                </Switch>
            </Router>
        );
    }
}
 
export default Routes;