/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import orderReducer from '../../reducers/order';
import { setCuisine, addItemToOrder } from '../../actions';

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

    test("should add an item to cuisine", (done) => {
        const itemId = 'P:SIZ';
        const result = orderReducer({ order: [] }, addItemToOrder(itemId));
        const expected = {
            order: [itemId]
        };

        expect(result).to.equal(expected);
        done();
    });

});
