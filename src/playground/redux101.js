 import {createStore} from 'redux';

const add= ({a,b}) =>{
    return a + b;
}

 console.log(add({a:1,b:12}));
 const incrementCount = (payload={}) =>({
     type:'INCREMENT',
     incrementBy:typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
 })

const store = createStore((state = {count:0} ,action) =>{

    switch(action.type){
        case 'INCREMENT' : 
        //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count:state.count + action.incrementBy
        };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count:state.count - decrementBy
        };
        case 'RESET' :
        return {
            count:0
        };
        default : 
        return state
    };


    // if(action.type === "INCREMENT"){
    //     return {
    //         count:state.count + 1
    //     }
    // }
    // else
    // {
    //     return state;
    // }
    //console.log('running...');
})

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy:5}))
// store.dispatch({
//     type:"INCREMENT",
//     incrementBy:5
// });
//console.log(store.getState());
store.dispatch({
    type:"INCREMENT",
    incrementBy:5
});

store.dispatch({
    type:"RESET"
});

store.dispatch({
    type:"DECREMENT",
    decrementBy:3
});

// console.log(store.getState());