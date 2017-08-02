/* eslint-env node */

import React from 'react';
import Lab from 'lab';
import { expect } from 'code';
import { shallow } from 'enzyme';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('MenuItem component', () => {
    
    const props = {
        items: [
            { id: 'P:SIZ', name: "The Sizzler", price: 16.99 },
            { id: 'P:HAW', name: "Hawaiian", price: 15.99 },
            { id: 'P:SUP', name: "Supreme", price: 17.99 }
        ]
    };

    test("should show a list of menu items", (done) => {
        const wrapper = shallow(<Menu items={props.items} />);
        const element = wrapper.find('ul.menu');

        expect(element.length).to.equal(1);
        done();
    });

    test("should show a menu item for each item in the list", (done) => {
        const wrapper = shallow(<Menu items={props.items} />);
        const elements = wrapper.find(MenuItem);

        expect(elements.length).to.equal(3);
        done();
    });
});
