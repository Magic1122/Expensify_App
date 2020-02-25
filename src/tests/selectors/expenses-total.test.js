import selectExpensesTotal from '../../selectors/expenses-total';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should return the result of expenses amount', () => {
    const total = selectExpensesTotal(expenses)
    expect(total).toBe(195 + 109500 + 4500);
})

test('should return 0', () => {
    const total = selectExpensesTotal([])
    expect(total).toBe(0);
})

test('should return the result of expenses amount', () => {
    const total = selectExpensesTotal([expenses[2]])
    expect(total).toBe(4500);
})