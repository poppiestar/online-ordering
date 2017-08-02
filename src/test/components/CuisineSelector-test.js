/* eslint-env node */

import React from 'react';
import Lab from 'lab';
import sinon from 'sinon';
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

    test("should list each cuisine types as an option element", (done) => {
        const wrapper = shallow(<CuisineSelector options={props.options} />);
        
        expect(wrapper.find('select option').length).to.equal(6);
        done();
    });

    test("should select the cuisine when an option is selected", (done) => {
        const changeSpy = sinon.spy();
        const wrapper = shallow(<CuisineSelector options={props.options} selectCuisine={changeSpy} />);

        wrapper.find('select').simulate('change', {target: { value : 2 }});
        expect(changeSpy.callCount).to.equal(1);
        done();
    });
});
