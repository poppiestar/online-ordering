/* eslint-env node */

import React from 'react';
import Lab from 'lab';
import { expect } from 'code';
import { shallow } from 'enzyme';

import CuisineSelector from '../../components/CuisineSelector';

const lab = exports.lab = Lab.script();
const { suite, test, beforeEach } = lab;

suite('Cuisine Selector component', () => {
    
    let props;

    beforeEach((done) => {
        props = {
            options: [
                { id: 1, name: 'Chinese' },
                { id: 2, name: 'Indian' },
                { id: 3, name: 'Italian' },
                { id: 4, name: 'Thai' },
                { id: 5, name: 'Turkish' }
            ]
        };

        done();
    });

    test("should show a select box", (done) => {
        const wrapper = shallow(<CuisineSelector options={props.options} />);
        
        expect(wrapper.find('select').length).to.equal(1);
        done();
    });
});
