import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserContext from '../context/user.context';




const Navbarr = () => {

  const userContext =useContext(UserContext);
  const doLogout =()=>
  {
    // userContext.setIsLogin(false);
    // userContext.setUserData(null);
    userContext.logout();
  }

  return (
    
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand >Electro Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
        
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Feature</Nav.Link>
            <Nav.Link href ="/about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/cart">Cart</Nav.Link>
            {
              (userContext.isLogin)?( 
                   <>
                   ({(userContext.isAdminUser) && (
                   <>
                   
                    <Nav.Link href="/admin/home">Admin Dashboard</Nav.Link>

                   </>
                   )})
                   <Nav.Link href="/users/home">{userContext.userData?.user?.email}</Nav.Link>
                   <Nav.Link href="/users/orders">Order</Nav.Link>
                   <Nav.Link onClick={doLogout}>Logout</Nav.Link></>):(
                  
                  <>

                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Signup</Nav.Link>
                    </>
                  )

  
            }
          

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navbarr