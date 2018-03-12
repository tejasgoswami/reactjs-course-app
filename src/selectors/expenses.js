//Get Visible Expenses
import moment from 'moment';
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) =>{

    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAtMoment);
       // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate;

       const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day'):true;
       const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true;
        const textMatch = expense.description.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
      //  console.log(sortBy);
         if(sortBy === 'Date'){
             return a.createdAt < b.createdAt ? 1 : -1;
         }
          if(sortBy === 'Amount'){
             return a.amount < b.amount ? 1 : -1;
         }
    });
}

export default getVisibleExpenses;