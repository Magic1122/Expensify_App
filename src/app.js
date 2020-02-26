// install --> import --> use
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import { startSetExpenses } from './actions/expenses';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

export const store = configureStore();

/* store.dispatch(addExpense({ description: 'Water Bill', amount: 10000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1200, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Taxes', amount: 1000 }))
const state = store.getState(); */

/* setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000)
 */
/* console.log(getVisibleExpenses(state.expenses, state.filter))
console.log(store.getState()); */

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {

    ReactDOM.render(jsx, document.getElementById('app'));

})

