import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component{
    state={
        calenderFocused:null
    };
    onDatesChange = ({startDate,endDate}) =>{
        console.log(startDate)
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange =(calenderFocused) =>{
    // console.log(this.props.filters.startDate)
        this.setState(()=>{
            calenderFocused:calenderFocused
        })
    }
    render(){
        return (
    
            <div>
                <input 
                type="text" 
                value={this.props.filters.text}
                 onChange={(e)=>{
                        this.props.dispatch(setTextFilter(e.target.value));
                  }}/>
            
                <select value={this.props.filters.sortBy}
                onChange={(e)=>{     
                    if(e.target.value === 'Date'){        
                           this.props.dispatch(sortByDate());
                    }
                    else if(e.target.value === 'Amount'){
                        this.props.dispatch(sortByAmount());
                    }
                }}
                >
                    <option value="Date">Date</option>
                    <option value="Amount">Amount</option>
                </select>
{/* 
                   { <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,                  
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,                 
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    /> } */}

                    <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}  
                        showClearDates={true}    
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return{
        filters:state.filters
    }
}

//export default ExpenseListFilters
export default connect(mapStateToProps)(ExpenseListFilters);