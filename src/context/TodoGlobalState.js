import React, { createContext, useReducer } from 'react';
import AppTodoReducer from './AppTodoReducer'
const initialState = {
                    todos: [{ id: 1, studentname: 'Cynthia John', todoItem: 'Finish My report', status: 'Pending', iscomplete: false}],	    
                    contacts: [{ id: 1, firstname: 'Cynthia', lastname: 'Jones', email: 'cynthis@hotmail.com', comments: 'None'},
                            { id: 2, firstname: 'Cynthia', lastname: 'Matthew', email: 'cynthis@hotmail.com', comments: 'None'}]          			  
                     }
     
export const TodoGlobalContext = createContext(initialState);
export const TodoGlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppTodoReducer, initialState);    
    function removeTodo(id) {
        let r = window.confirm("Do you want to delete this item");
        if (r === true) {      
            dispatch({
                type: 'REMOVE_TODO',
                payload: id
            });
        }
    };
    
    function addTodo(todos) {
        dispatch({
            type: 'ADD_TODO',
            payload: todos
        });
    };

    function editTodo(todos) {
        dispatch({
            type: 'EDIT_TODO',
            payload: todos
        });
    };
    function togglecompleteTodo(id) {
        let r = window.confirm("Do you want to mark this task as complete ?");
        if (r === true) { 
        dispatch({
            type: 'TOGGLE_COMPLETE_TODO',
            payload: id
        });
    }
    };

    function removeContact(id) {
        let r = window.confirm("Do you want to delete this Contact");
        if (r === true) {      
            dispatch({
                type: 'REMOVE_CONTACT',
                payload: id
            });
        }
    };
    
    function addContact(contacts) {
        dispatch({
            type: 'ADD_CONTACT',
            payload: contacts
        });
    };

    function editContact(contacts) {
        dispatch({
            type: 'EDIT_CONTACT',
            payload: contacts
        });
    };
    function toggleContact(id) {
        let r = window.confirm("Do you want to toggle status of this contact (to active or inactive) ?");
        if (r === true) {  
        dispatch({
            type: 'TOGGLE_CONTACT',
            payload: id
        });
    }       
    };
    return (<TodoGlobalContext.Provider value={{
        todos: state.todos,        
        contacts: state.contacts,
        removeTodo,
        addTodo,
        editTodo,
        togglecompleteTodo,
        removeContact,
        addContact,
        editContact,                   
    }}>
        {children}
    </TodoGlobalContext.Provider>);
}
