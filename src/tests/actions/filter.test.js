import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount,  } from '../../actions/filters';

test(('should generate set start date action object'), () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test(('should generate set end date action object'), () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test(('should generate set text filter obj with default'), () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test(('should generate set text filter obj with custom value'), () => {
    const action = setTextFilter('text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text'
    })
})

test(('should give back an object type sort by date'), () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test(('should give back an object type sort by amount'), () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

