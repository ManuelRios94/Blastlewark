import React, { Component } from 'react';
import { Navbar, Dropdown } from 'react-bootstrap';

import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Dropdown.Divider className="Footer-Separator"/>
        <Navbar className="Footer-Nav" bg="dark" variant="dark">
          <h6>Manuel Rios &copy; {new Date().getFullYear()} Copyright</h6>
        </Navbar>
      </div>
    );
  }
}

export default Footer;