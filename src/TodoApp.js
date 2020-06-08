import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { TodoHome } from './components/Adapted/TodoHome';
import { AddTodo } from './components/Adapted/AddTodo';
import { AddContact } from './components/Adapted/AddContact';
import { ContactList } from './components/Adapted/ContactList';
import { EditTodo } from './components/Adapted/EditTodo';
import { TodoALLList } from './components/Adapted/TodoALLList';
import { TodoActiveList } from './components/Adapted/TodoActiveList';
import { TodoCompletedList } from './components/Adapted/TodoCompletedList';
import { TodoGlobalProvider } from './context/TodoGlobalState';


const TodoApp = () => { 
  return (        
    <TodoGlobalProvider>
      <Switch>
        <Route path="/" component={TodoHome} exact />
        <Route path="/add" component={AddTodo} exact />  
        <Route path="/edit/:id" component={EditTodo} exact />  
        <Route path="/addcontact" component={AddContact} exact />  
        <Route path="/viewalltodos" component={TodoALLList} exact /> 
        <Route path="/viewcompletedtodos" component={TodoCompletedList} exact /> 
        <Route path="/viewactivetodos" component={TodoActiveList} exact /> 
        <Route path="/showcontacts" component={ContactList} exact />                         
      </Switch>
    </TodoGlobalProvider>    
 
  );
}

export default TodoApp;