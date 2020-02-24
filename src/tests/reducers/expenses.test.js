import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not expenses if id not find', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        description: 'Gas Bll',
        id: '4',
        note: '',
        createdAt: 2000,
        amount: 29500
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)

    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const amount = '100000'

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state[1].amount).toBe(amount)
})

test('should not edit an expense', () => {
    const amount = '100000'

    const action = {
        type: 'EDIT_EXPENSE',
        id: '12',
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})
