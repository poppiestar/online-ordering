/* eslint-env node */

import React from 'react';
import Lab from 'lab';
import sinon from 'sinon';
import { expect } from 'code';
import { shallow } from 'enzyme';

import MenuItem from '../../components/MenuItem';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('MenuItem component', () => {
    
    const props = {
        id: 'P:SIZ',
        name: "The Sizzler",
        price: 16.99
    };

    test("should show a checkbox", (done) => {
        const wrapper = shallow(<MenuItem id={props.id} name={props.name} price={props.price} />);
        const element = wrapper.find('input[type="checkbox"]');

        expect(element.length).to.equal(1);
        expect(element.prop('name')).to.equal(props.id);
        done();
    });

    test("should show the item name", (done) => {
        const wrapper = shallow(<MenuItem id={props.id} name={props.name} price={props.price} />);
        const element = wrapper.find('span.name');

        expect(element.length).to.equal(1);
        expect(element.text()).to.equal(props.name);
        done();
    });
    
    test("should show the item price", (done) => {
        const wrapper = shallow(<MenuItem id={props.id} name={props.name} price={props.price} />);
        const element = wrapper.find('span.price');

        expect(element.length).to.equal(1);
        expect(parseFloat(element.text())).to.equal(props.price);
        done();
    });
    
    test("should fire the action to add the menu item to state", (done) => {
        const addItemToMenuSpy = sinon.spy();
        const wrapper = shallow(<MenuItem addItemToMenu={addItemToMenuSpy} id={props.id} name={props.name} price={props.price} />);

        wrapper.find('input').simulate('change');

        expect(addItemToMenuSpy.callCount).to.equal(1);
        expect(addItemToMenuSpy.calledWith(props.id)).to.equal(true);
        done();
    });
});
