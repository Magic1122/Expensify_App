import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    console.log('STARTDATE', startDate, 'ENDDATE', endDate)
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        console.log(startDateMatch)
        console.log(endDateMatch)
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses;
