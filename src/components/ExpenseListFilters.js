import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'


class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null,

    }

    onDatesChange = ({ startDate, endDate }) => {
        console.log(startDate, endDate)
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState({ calendarFocused })
    }

    render() {
        return (<div className='content-container'>
            <div className='input-group'>
                <div className='input-group__item'>
                <input className='text-input' type='text' placeholder='Search expenses' value={this.props.filter.text} onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))} /></div>
                <div className='input-group__item'>
                    <select className='select' value={this.props.filter.sortBy} onChange={(e) => e.target.value == 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())}>
                        <option value='date'>Date</option>
                        <option value='amount'>Amount</option>
                </select></div>
                <div className='input-group__item'><DateRangePicker
                    startDate={this.props.filter.startDate}
                    endDate={this.props.filter.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                /></div>
            </div>


        </div>)
    }
}


const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}


export default connect(mapStateToProps)(ExpenseListFilters);
