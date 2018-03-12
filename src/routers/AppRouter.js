
import React from'react';
import {BrowserRouter,Route,Switch,Link, NavLink} from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpExpensePage from '../components/HelpExpensePage';
import FileNotFoundPage from '../components/FileNotFoundPage';
import Header from '../components/Header';


const AppRouter = () =>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>  
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpExpensePage}/>
        <Route  component={FileNotFoundPage}/>
        </Switch>
    </div>       
    </BrowserRouter>
);

export default AppRouter;
