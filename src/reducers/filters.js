import moment from 'moment';
//filters Reducers

const filtersReducersDefaultState  = {
    text:'',
    sortBy:'Date', //Date or Amount
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
};

const filtersReducers = (state=filtersReducersDefaultState,action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        };
        case 'SORT_BY_DATE':
        //console.log('test')
        return {
            ...state,
            sortBy:'Date'
        };
        case 'SORT_BY_AMOUNT':
        //console.log('test')
        return {
            ...state,
            sortBy:'Amount'
        };
        case 'SET_START_DATE':
        console.log('test')
        return {
            ...state,
            startDate:action.startDate
        };
        case "SET_END_DATE":
        console.log('test')
        return {
            ...state,
            endDate:action.endDate
        };
        default:
            return state;
    }
};


export default filtersReducers