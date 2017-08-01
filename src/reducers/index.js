// @flow

import { combineReducers } from 'redux';

import greeting from './greeting';

const onlineOrderingApp = combineReducers({
    greeting
});

export default onlineOrderingApp;
