/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import greeting from '../../reducers/greeting';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('greeting reducers', () => {

    test("should change the greeting according to the action", (done) => {
        const greetingAction = {
            type: 'SET_GREETING',
            greeting: 'I am the test greeting'
        };

        const expected = greeting('initial state', greetingAction);
        const actual = greetingAction.greeting;
        
        expect(expected).to.equal(actual);
        done();
    });
});
