import { combineReducers } from 'redux';

import auth from './auth/reducer';
import deliveries from './deliveries/reducer';
import deliveryman from './deliveryman/reducer';
import recipients from './recipients/reducer';

export default combineReducers({ auth, deliveries, deliveryman, recipients });
