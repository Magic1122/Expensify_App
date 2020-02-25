import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render an expense total item', () => {

    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} /* id={expenses[1].id} description={expenses[1].description} amount={expenses[1].amount} createdAt={expenses[1].createdAt} */ />)

    expect(wrapper).toMatchSnapshot();
})

test('should render multiple total item', () => {

    const wrapper = shallow(<ExpensesSummary expenses={expenses} /* id={expenses[1].id} description={expenses[1].description} amount={expenses[1].amount} createdAt={expenses[1].createdAt} */ />)

    expect(wrapper).toMatchSnapshot();
})

