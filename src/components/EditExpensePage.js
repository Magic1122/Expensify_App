import React from 'react';
import { connect } from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import { startRemoveExpense, startEditExpense, editExpense, removeExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Edit Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseFrom
                    expense={props.expense}
                    onSubmit={(expense) => {
                        props.dispatch(startEditExpense(props.expense.id, expense))
                        props.history.push('/dashboard')
                    }} />
                <button className='button button--secondary' type='button' onClick={() => props.dispatch(startRemoveExpense({ id: props.expense.id }))
                    && props.history.push('/dashboard')}>Remove Expense</button>
            </div>
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
