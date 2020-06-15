import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';
import Signin from '../Signin';
import Signup from '../Signup';

import Dashboard from '../Dashboard';
import Profile from '../Profile';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/register" component={Signup} />

            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
        </Switch>
    );
}
