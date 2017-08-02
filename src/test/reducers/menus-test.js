/* eslint-env node */

import Lab from 'lab';
import { expect } from 'code';

import menusReducer from '../../reducers/menus';
import { addMenu } from '../../actions';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('order reducer', () => {
    
    test("should set the selected cuisine", (done) => {
        const data = {
            value: 'value'
        };

        const result = menusReducer({}, addMenu(3, data));
        const expected = {
            3: data
        };

        expect(result).to.equal(expected);
        done();
    });
});
