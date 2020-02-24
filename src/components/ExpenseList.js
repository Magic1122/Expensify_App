import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => {
    return (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem description={expense.description} amount={expense.amount} createdAt={expense.createdAt} id={expense.id} key={expense.id}/>
            }) 
        )
    }
    </div>
);
    }

const mapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    }
}

export default connect(mapStateToProps)(ExpenseList);

