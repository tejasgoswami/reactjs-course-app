





store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})


const expenseOne = store.dispatch(addExpense({description:'Rent',amount:10}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:100}));


// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:5}))

 store.dispatch(setTextFilter('rent'));
 //store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());


store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());


// store.dispatch(setEndDate(1225));


//console.log(expenseOne);
const demoState ={
    expenses :[{
        id:'qwqwytqy',
        description: 'january rent',
        note:'this is final payment for that address',
        amount:3000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //Date or Amount
        startDate:undefined,
        endDate:undefined
    }
};

// const user = {
//     name:'tejas',
//     age:23
// }

// console.log({
//     age:25,
//     ...user,
//      location:'talaja'
    
// })