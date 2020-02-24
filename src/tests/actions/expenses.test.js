import { addExpense, removeExpense, editExpense } from '../../actions/expenses';
import uuid from 'uuid';

test(('should setup remove expense action object'), () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test(('should setup edit expense action object'), () => {
    const action = editExpense('abc123', { description: 'gas bill', amount: '1000' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'gas bill',
            amount: '1000'
        }
    })
})

test(('should setup add expense action object with defaults'), () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})

test(('should setup add expense action object with provided values'), () => {
    const expenseData = {
        description: 'Test',
        note: 'some note',
        amount: 1000,
        createdAt: 0
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})
