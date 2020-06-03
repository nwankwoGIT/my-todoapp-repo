import React, {useContext} from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavdropDown'
import { TodoGlobalProvider } from '../../context/TodoGlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoGlobalContext } from '../../context/TodoGlobalState';
import { Route, NavLink,  Link, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer, NavItem} from 'react-router-bootstrap'

const TodoMenu = () => {
  const { todos, removeTodo, editTodo} = useContext(TodoGlobalContext);    
  
  return(
  <>
  <TodoGlobalProvider>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">        
        <LinkContainer to="/"> 
           <Nav.Link>Home</Nav.Link>
        </LinkContainer>    
        <NavDropdown title="Contact SubMenu" id="collasible-nav-dropdown0">  
          <LinkContainer to="/addcontact">
              <NavDropdown.Item>Add New Contact</NavDropdown.Item>   
          </LinkContainer>  
          <LinkContainer to="/showcontacts">
              <NavDropdown.Item>Show Contacts</NavDropdown.Item>   
          </LinkContainer>            
        </NavDropdown>
        <NavDropdown title="Todo SubMenu" id="collasible-nav-dropdown">                    
          <LinkContainer to="/add">
            <NavDropdown.Item>Add New Todo</NavDropdown.Item>   
           </LinkContainer>  
           <LinkContainer to="/edit/1">
             <NavDropdown.Item>Edit TodoItem 1</NavDropdown.Item>   
           </LinkContainer> 
           <NavDropdown.Divider />           
           <LinkContainer to="/viewalltodos">             
             <NavDropdown.Item>All Todos</NavDropdown.Item>  
           </LinkContainer>
           <LinkContainer to="/viewcompletedtodos">             
             <NavDropdown.Item>Completed Todos</NavDropdown.Item>  
           </LinkContainer>
           <LinkContainer to="/viewactivetodos">             
             <NavDropdown.Item>Active Todos</NavDropdown.Item>  
           </LinkContainer>            
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Other links</NavDropdown.Item>          
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </TodoGlobalProvider>
   </> 
   )
  }
  
  export default TodoMenu;
  
const NavTab = props => {
  var activeStyle = {
    color: "green",
    fontWeight: "bold",
    
  };

  var navStyle = {    
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    fontSize:"40px",
    fontWeight:"bold"
  };

  return (
    <NavLink className="container" style={navStyle} activeStyle={activeStyle} to={props.to}>
      {props.label}
    </NavLink>
  );
};

const NavBar = (props) => {
  return (
    <div >
      <NavTab to="/add" label="Add Todo" />      
    </div>
  );
  };
  
  const TodoMenu2 = () => {
    const { todos, removeTodo, editTodo} = useContext(TodoGlobalContext);    
    
    return(
    <>
    <Navbar collapseOnSelect id="navbar">
        <div className="container">
            <Navbar.Header className="navbar-header">
                <Link className="navbar-brand" to="/">Website</Link>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav id="nav">
                    <LinkContainer exact to="/">
                        <NavItem>Home</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/club">
                        <NavItem>Club</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/contact">
                        <NavItem>Contact</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <LinkContainer to="/login">
                        <NavItem >Login</NavItem>
                    </LinkContainer>                 
                   
                    
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
 </>)
  }
