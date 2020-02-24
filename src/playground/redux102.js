import { createStore } from 'redux';

// Action generators = functions that return actions objects
const add = ({ a, b }, c) => {
    return a + b + c
}

console.log(add({ a: 1, b: 12 }, 100))

const incrementCount = ( {incrementBy = 1} = {} ) => ({ 
    type: 'INCREMENT',
    incrementBy                
});

const decrementCount = ( { decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ( {count} ) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

/* const incrementCount = ( payload = {} ) => ({ 
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1                    
}); */

/* const decrementCount = ( payload = {} ) => ({
    type: 'DECREMENT',
    decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
}) */

//REDUCER

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
    return state;
    }
}

const store = createStore(countReducer);

// subscribe to changes

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// !!! unsubscribe() !!! //

// unsubscribe is the return value of subscribe


// Actions - object that gets sent to the store

// increment the count
/* store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
}); */

store.dispatch(incrementCount({ incrementBy: 5 }))

/* store.dispatch({
    type: 'INCREMENT'
}); */

store.dispatch(incrementCount());

// decrement the count

/* store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
}); */

store.dispatch(decrementCount({ decrementBy: 5 }))
store.dispatch(decrementCount())


// reset 

store.dispatch(resetCount());

// set

store.dispatch(setCount({ count: 101 }))

