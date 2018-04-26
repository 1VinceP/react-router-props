import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Page1 from './views/Page1'
import Page2 from './views/Page2'
import Page3 from './views/Page3'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/page/:pageId/:binId' component={Page1} /> */}
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
    </Switch>
)