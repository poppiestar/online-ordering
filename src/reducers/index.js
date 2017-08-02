// @flow

import { combineReducers } from 'redux';

import cuisines from './cuisines';
import order from './order';

const onlineOrderingApp = combineReducers({
    cuisines,
    order
});

export default onlineOrderingApp;
