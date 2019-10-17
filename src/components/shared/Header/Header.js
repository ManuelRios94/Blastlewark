import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href={"/"}><Icon icon={home}/> Blastlewark</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Header;