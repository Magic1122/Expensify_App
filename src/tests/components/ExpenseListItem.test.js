import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render an expense list item', () => {

    const wrapper = shallow(<ExpenseListItem {...expenses[1]} /* id={expenses[1].id} description={expenses[1].description} amount={expenses[1].amount} createdAt={expenses[1].createdAt} */ />)

    expect(wrapper).toMatchSnapshot();
})
