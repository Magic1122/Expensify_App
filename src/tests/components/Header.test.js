import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';
import { LoginPage } from '../../components/LoginPage';
import { startLogin } from '../../actions/auth';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);

    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text()).toBe('Expensify')

   /*  const renderer = new ReactShallowRenderer();

    renderer.render(<Header />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
    
    console.log(renderer.getRenderOutput()); */
})

// should call startLogout on button click

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);

    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})
    /* expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot(); */

// LoginPage test file --> Should call startLogin on button click