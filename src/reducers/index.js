// @flow

import { combineReducers } from 'redux';

import cuisines from './cuisines';

const onlineOrderingApp = combineReducers({
    cuisines
});

export default onlineOrderingApp;
