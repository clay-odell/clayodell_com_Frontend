import { useState, useEffect, useRef } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        variant="secondary"
        expanded={isOpen}
        ref={navbarRef}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="Clay_Logo-with-name.PNG"
              alt="Logo for Clay O'Dell"
              width="50"
              height="50"
            />{" "}
            Clay O'Dell
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/experience">
                Resumé/CV
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link> */}
              <Nav.Link as={Link} to=""></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
