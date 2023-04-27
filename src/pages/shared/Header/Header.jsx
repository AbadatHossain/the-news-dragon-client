import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {

const {user} = useContext(AuthContext)
console.log("user" , user)

  return (
    <div className="container">
      <div className="text-center mt-3">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="mb-5 d-flex text-danger bg-secondary">
        <Button variant="danger">Danger</Button>

        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>           
            <Nav.Link href="#pricing">Career</Nav.Link>           
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Profile</Nav.Link> */}
            <Nav.Link href="#deets">{user.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
