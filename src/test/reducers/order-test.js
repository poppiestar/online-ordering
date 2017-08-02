/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import orderReducer from '../../reducers/order';
import { setCuisine } from '../../actions';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('order reducer', () => {
    
    test("should set the selected cuisine", (done) => {
        const result = orderReducer({}, setCuisine(5));
        const expected = {
            cuisine: 5
        };

        expect(result).to.equal(expected);
        done();
    });
});
