import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';
import Deliveries from '../Deliveries';
import Deliverymen from '../Deliverymen';
import Recipients from '../Recipients';
import Problems from '../Problems';
import Signin from '../Signin';
import RegisterDeliveries from '../RegisterDeliveries';
import RegisterDeliveryman from '../RegisterDeliveryman';
import RegisterRecipients from '../RegisterRecipients';
import Editdeliveryman from '../Editdeliveryman';
import EditRecipients from '../EditRecipients';
import EditDelivery from '../EditDelivery';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />

            <Route path="/deliveries" exact component={Deliveries} isPrivate />
            <Route
                path="/deliverymen"
                exact
                component={Deliverymen}
                isPrivate
            />
            <Route path="/recipients" exact component={Recipients} isPrivate />
            <Route path="/problems" component={Problems} isPrivate />
            <Route
                path="/deliveries/registerdeliveries"
                component={RegisterDeliveries}
                isPrivate
            />

            <Route
                path="/deliverymen/registerdeliveryman"
                component={RegisterDeliveryman}
                isPrivate
            />

            <Route
                path="/recipients/registerrecipients"
                component={RegisterRecipients}
                isPrivate
            />

            <Route
                path="/deliverymen/editdeliveryman/:id"
                component={Editdeliveryman}
                isPrivate
            />

            <Route
                path="/recipients/editrecipients/:id"
                component={EditRecipients}
                isPrivate
            />

            <Route
                path="/deliveries/editdelivery/:id"
                component={EditDelivery}
                isPrivate
            />
        </Switch>
    );
}
