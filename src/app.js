import React from'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.css';

const store = configureStore();

store.dispatch(addExpense({description:'Water Bill',amount:2500}));
store.dispatch(addExpense({description:'Gas Bill',createdAt:1000}));
store.dispatch(addExpense({description:'rent',amount:10900}));
// store.dispatch(setTextFilter('water'));


// setTimeout(() =>{
//     store.dispatch(setTextFilter('bill'));
// },3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
//console.log(visibleExpenses);
//console.log(store.getState());

const jsx =(

    <Provider store={store}>
        <AppRouter/>
    </Provider>
    
)
ReactDOM.render(jsx ,document.getElementById('app'));

