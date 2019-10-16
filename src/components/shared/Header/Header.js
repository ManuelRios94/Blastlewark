import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href={"/"}>Blastlewark</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Header;