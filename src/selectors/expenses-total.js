const selectExpensesTotal = (expensesArr) => {
    let expenses = [0]
    if (expensesArr) {
        expensesArr.map((expense) => {
            expenses.push(expense.amount)
        })
    }
    return expenses.reduce((a, b) => a + b);
}

export default selectExpensesTotal;
