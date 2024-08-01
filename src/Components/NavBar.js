import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BarChart2 } from 'lucide-react';

function NavBar({ brand, links, theme }) {
  return (
    <Navbar bg={theme} variant={theme === 'light' ? 'light' : 'dark'} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <BarChart2 size={24} className="me-2" />
          <span className="fw-bold">{brand}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link, index) => 
              link.dropdown ? (
                <NavDropdown key={index} title={link.label} id={`nav-dropdown-${link.label}`}>
                  {link.dropdown.map((subLink, subIndex) => (
                    <NavDropdown.Item key={subIndex} href={subLink.href}>
                      {subLink.label}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link key={index} href={link.href}>
                  {link.label}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  brand: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string.isRequired,
      dropdown: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

NavBar.defaultProps = {
  brand: 'Sentiment Analyzer',
  links: [
    { href: '#', label: 'Dashboard' },
    { href: '#', label: 'Assigned' },
    { 
      label: 'Document', 
      dropdown: [
        { href: '#create', label: 'Create' },
        { href: '#view', label: 'View' },
      ]
    },
  ],
  theme: 'light',
};

export default NavBar;