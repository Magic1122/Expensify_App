import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'))

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        // console.log(e.target.value)
        const description = e.target.value
        this.setState({ description })
        // console.log(this.state.description)

    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState({ note })
        // console.log(this.state.note)
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount })
        }
    }

    onDateChange = (createdAt) => {
        createdAt &&
            this.setState({ createdAt })
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            // set error state qual to please provide desc and amount
            this.setState(() => ({ error: 'Please provide description and amount!' }))
        } else {
            this.setState({ error: '' })
            // console.log('Sumbitted')
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }



    render() {
        return (<div>
            {this.state.error && <p1>{this.state.error}</p1>}
            <form onSubmit={this.onSubmit}>
                <input type='text'
                    placeholder='Description'
                    autoFocus
                    value={this.state.description}
                    onChange={(e) => this.onDescriptionChange(e)}>
                </input>
                <input type='text'
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}></input>
                <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={this.onDateChange} // PropTypes.func.isRequired
                    focused={this.state.calendarFocused} // PropTypes.bool
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder='Add a note for your expense (optional)'
                    value={this.state.note}
                    onChange={(e) => this.onNoteChange(e)}></textarea>
                <button type='submit'>Add Expense</button>
            </form>
        </div>)
    }
}

export default ExpenseForm;