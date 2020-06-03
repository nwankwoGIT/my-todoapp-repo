import React, { Fragment, useState, useContext } from 'react';
import { TodoGlobalContext } from '../../context/TodoGlobalState';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt, faToggleOn, faCheckSquare} from '@fortawesome/free-solid-svg-icons'

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Card, Divider,Col, Row} from 'antd'

export const TodoTasklist2 = () => { 
    const gridHeaderStyle = {       
        width: '15%',
        textAlign: 'center',
        color:"red",
        fontWeight: "bold"
      };
      const gridHeaderStyle2 = {       
        width: '25%',
        textAlign: 'center',
        color:"red",
        fontWeight: "bold"
      };
      const gridStyle = {       
        width: '15%',
        textAlign: 'left',
      };
      const gridStyle2 = {       
        width: '25%',
        textAlign: 'left',
      };
    const { todos, removeTodo, editTodo,togglecompleteTodo} = useContext(TodoGlobalContext);         
    return (
        <Fragment>
        <Card title="">
            <h4>All Todo Tasks </h4>
           <Card>
            <Card.Grid style={gridHeaderStyle}>Student Name</Card.Grid>
            <Card.Grid style={gridHeaderStyle2}>Todo Item</Card.Grid>
            <Card.Grid style={gridHeaderStyle}>Status</Card.Grid>
            <Card.Grid style={gridHeaderStyle}>Edit Action</Card.Grid>
            <Card.Grid style={gridHeaderStyle}>Toggle Complete</Card.Grid>
            <Card.Grid hoverable={false} style={gridHeaderStyle}>Delete Action</Card.Grid>            
            </Card>

        {todos.length > 0 ? <Fragment>
            
            {todos.map(todotask => (    
            <div key={todotask.id} className="site-card-wrapper">               
                <Card.Grid style={gridStyle}><p style={{textDecoration: todotask.iscomplete ? 'line-through' : 'none'}} > {todotask.studentname}</p></Card.Grid>               
                <Card.Grid hoverable={false} style={gridStyle2}><p style={{textDecoration: todotask.iscomplete ? 'line-through' : 'none'}} > {todotask.todoItem}</p></Card.Grid>
                <Card.Grid style={gridStyle}><p style={{textDecoration: todotask.iscomplete ? 'line-through' : 'none'}}>{todotask.status}</p></Card.Grid>
                <Card.Grid style={gridStyle}>                    
                <Link to={`/edit/${todotask.id}`}>
                                <button onClick={() => editTodo(todotask.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </button>
                            </Link>
                    
                    </Card.Grid>
                <Card.Grid style={gridStyle}>    
                 
                 <button onClick={() => togglecompleteTodo(todotask.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                        <FontAwesomeIcon icon={faToggleOn} />
                     </button> 
                    
                    </Card.Grid>    
                <Card.Grid style={gridStyle}>
                <button onClick={() => removeTodo(todotask.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                     </button> 
                  </Card.Grid>                                   
                  <Divider/>
            </div>
            ))}
            </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">You have No Todo Item</p>} 
            </Card>   
        </Fragment>

      )}

