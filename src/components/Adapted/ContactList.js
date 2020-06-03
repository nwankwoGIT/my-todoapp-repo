import React, { Fragment, useState, useContext } from 'react';
import { TodoGlobalContext } from '../../context/TodoGlobalState';
import TodoMenu from './TodoMenu'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {  Table, Space  } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faBan, faHighlighter, faTrashAlt, faSpinner,faCheckSquare} from '@fortawesome/free-solid-svg-icons'
library.add(fab,  faCoffee,  faBan, faHome, faHighlighter, faTrashAlt, faSpinner,faCheckSquare)
const { Column } = Table;
/*
In our call to library.add() we're passing

fab: which represents all of the brand icons in @fortawesome/free-brands-svg-icons. 
So any of the brand icons in that package may be referenced by icon name as a string anywhere else in our app. For example: "apple", "microsoft", or "google".
faCheckSquare and faCoffee: Adding each of these icons individually allows us to refer to them throughout our app by 
their icon string names, "check-square" and "coffee", respectively.
*/
export const ContactList = () => {   
    const [firstname, setFirstName] = useState('');
    const [lasttname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');    
    const {contacts, removeContact } = useContext(TodoGlobalContext);          
   
    //const trItem = todos.map( (item,index) => data.push(item)) 
    // to resolve key error in antd Table you must use rowKey ='id' in <Table rowKey='id' dataSource={todos}>
        return (
            <>    
            <TodoMenu/>             
            <div>
            <h2 className="text-center">List Of All Contacts </h2>             
            <Table style={{ width: '100%', height: 'auto' }} dataSource={contacts} rowKey={(record) => record.id} >               
                <Column title="First Name" dataIndex="firstname" key="firstname" width='16vw'/>
                <Column title="Last Name" dataIndex="lastname" key="lastname" width='16vw'/>
                <Column title="Email Address" dataIndex="email" key="email" width='16vw'/>
                <Column title="Comments" dataIndex="comments" key="comments" width='16vw'/> 
                <Column title="Comments" dataIndex="comments" key="comments" width='16vw'/>
                <Column
                title="Action"
                key="action"
                render={(text, record) => (
                <Space size="middle">                    
                    <button onClick={() => removeContact(record.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                     </button> 
                </Space>
                )}         
                />
            </Table> 
            </div>
         </>
            
      );   
  }

  
              