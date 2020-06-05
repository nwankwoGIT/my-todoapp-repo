import React, { Fragment, useState, useContext } from 'react';
import { TodoGlobalContext } from '../../context/TodoGlobalState';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn} from '@fortawesome/free-solid-svg-icons'

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Card, Divider, Row, Col} from 'antd'

export const TodoTasklist2 = () => {     
    const { todos, removeTodo, editTodo,togglecompleteTodo} = useContext(TodoGlobalContext);         
    return (
        <Fragment>   
         <div>
         <h1>All Todo Tasks </h1>
         <Row gutter={10}>
              <Col span={8}>
                <Card title="Student Name"  bordered={true}>             
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Student Todo Item"  bordered={true}>                 
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Task Status"  bordered={true}>                 
                </Card>  
              </Col>
         </Row>
         </div>
        <Card title="">           
           {todos.length > 0 ? <Fragment>            
            {todos.map(todotask => ( 
            <div key={todotask.id} className="site-card-wrapper">   
            <Row gutter={10}>
              <Col span={8}>                
                <Card  bordered={true}>
                  <p style={{textDecoration: todotask.iscomplete ? 'line-through' : 'none', color:"blue"}} > {todotask.studentname}</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={true}>
                <p style={{textDecoration: todotask.iscomplete ? 'line-through' : 'none',color:"blue" }} > {todotask.todoItem}</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card bordered={true}>
                <p style={{textDecoration: todotask.iscomplete ? 'line-through' : 'none', color:"blue"}}>{todotask.status}</p>
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
            <Col span={8}>
            <Card  bordered={true}>
            <Link to={`/edit/${todotask.id}`}>
                                <button  onClick={() => editTodo(todotask.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-2 rounded-full inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </button>
               </Link>
            </Card>
           </Col>
           <Col span={8}>
           <Card  bordered={true}>
           <button  onClick={() => togglecompleteTodo(todotask.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-2 rounded-full inline-flex items-center">
                 Toggle {" "}
                        <FontAwesomeIcon icon={faToggleOn} />
                 </button> 
           </Card>
            </Col>
            <Col span={8}>
           <Card  bordered={true}>
           <button  onClick={() => removeTodo(todotask.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-2 rounded-full inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                     </button> 
            </Card>
            </Col>
            </Row>                                          
             <Divider/>
            </div>
            ))}
            </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">You have No Todo Item</p>} 
        </Card>   
        </Fragment>

      )}

 // replace  in package json with this :  node server/server.js
 // commit to github and then ...
 // git push heroku master

 