/* eslint-env node */

import React from 'react';
import Lab from 'lab';
import { expect } from 'code';
import { shallow } from 'enzyme';

import App from '../../components/App';

const lab = exports.lab = Lab.script();
const { suite, test } = lab;

suite('App component', () => {

    test("should display the greeting passed to it", (done) => {
        const greeting = "This is a test greeting";

        const wrapper = shallow(<App greeting={greeting} />);

        expect(wrapper.find('h1').text()).to.equal(greeting);
        done();
    });
});
