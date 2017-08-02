// @flow

import { combineReducers } from 'redux';

import cuisines from './cuisines';
import order from './order';
import menus from './menus';

const onlineOrderingApp = combineReducers({
    cuisines,
    order,
    menus
});

export default onlineOrderingApp;
