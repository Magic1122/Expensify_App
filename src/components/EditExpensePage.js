import React from 'react';
import { connect } from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
    console.log(props)
    return (
    <div>
        <ExpenseFrom
        expense={props.expense}
        onSubmit={(expense) => {
            props.dispatch(editExpense(props.expense.id, expense))
            props.history.push('/')
        }} />
        <button type='button' onClick={() => props.dispatch(removeExpense({ id: props.expense.id }))
        && props.history.push('/')}>Remove</button>
    </div>
)
    }

const mapStateToProps = (state, props) => {
    console.log('STATE', state, 'PROPS', props)
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }

};

export default connect(mapStateToProps)(EditExpensePage);