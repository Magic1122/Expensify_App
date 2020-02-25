import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = (props) => {

    const expensesCount = props.expenses.length
    const expensesTotal = selectExpensesTotal(props.expenses)
    const expenseMessage = expensesCount <= 1 ? 'expense' : 'expenses';

    return (
    <div>
        <h1>Viewing {expensesCount} {expenseMessage} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h1>
    </div>
);
    }

const mapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);