import { createStore, combineReducers, bindActionCreators } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})


// REMOVE_EXPENSE

const removeExpense = ( { id } = {} ) => ({
    type:'REMOVE_EXPENSE',
    id
    })

// EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expense Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_EXPENSE':
            return /* state.concat(action.expense) */ [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter((el) => el.id != action.id)
        case 'EDIT_EXPENSE':
            return state.map((el) => {
                if (el.id == action.id) {
                    return {...el, ...action.updates };
                } else {
                    return el;
                }
            })
        default: 
            return  state;
    }
}

// FilterReducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    console.log('FILTER', action)
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return  {
                ...state, 
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
                }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

// timestamps (milliseconds)
// January 1st 1970 (unix epoch)
// 33400, 10, -203

// Get Visible Expenses function which takes expenses and filters

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        console.log(expense.createdAt, endDate )

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Store creation

// combineReducers takes an object in as argument

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer
    }));

// Make a store subscribe to follow changes

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
    console.log("VISIBLE", visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Investment', amount: 200, description: 'cbd oil', createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Investment', amount: 1200, description: 'cbd oil', createdAt: -1000 }));

console.log(expenseTwo);

// RemoveExpense

/* store.dispatch(removeExpense({ id: expenseOne.expense.id }));
 */
// Edit

/* store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 } ));
 */
// Filter set Text
 
/* store.dispatch(setTextFilter('rent'));
 */// store.dispatch(setTextFilter());

// Sort by Amount/Date

// store.dispatch(sortByDate()); // amount
store.dispatch(sortByAmount()); // date

// Set Start Date
/* 
store.dispatch(setStartDate(125)); // start date 125
store.dispatch(setStartDate()); // undefined */

// Set End Date

/* store.dispatch(setEndDate(100)) // end date  1250
 */

const demoState = {
    expenses: [{
        id: 'someid',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
}

console.log({
    ...user, 
    location: 'Vienna',
    age: 27
})
