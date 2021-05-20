import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'


export default class NavbarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navbarShadow: 'mt-3',
        }
    }


    componentDidMount() {
        // Onscroll 
        window.addEventListener('scroll', () => {
            let navbarShadow = 'bg-white shadow';
            if (window.scrollY === 0) {
                navbarShadow = 'mt-3';
            }
            this.setState({ navbarShadow });
        });
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className={`${this.state.navbarShadow}`} fixed="top" variant="light">
                <div className="container">
                    <Navbar.Brand href="#home">
                        <h1 className="h4 bold-2">Interactive art</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                        <Nav className="navbar-position">
                            <Nav.Link className="me-4 active bg-active link-navbar" href="#home">Home</Nav.Link>
                            <Nav.Link className="me-4 link-navbar" href="#about">About</Nav.Link>
                            <Nav.Link className="me-4 link-navbar" href="#how">How it work</Nav.Link>
                            <Nav.Link className="me-4 link-navbar" href="#clients">Clients</Nav.Link>
                            <Nav.Link className="me-4 link-navbar" href="#portfolio">Portfolio</Nav.Link>
                        </Nav>
                        <Nav>
                            <li className="nav-item p-3 d-flex">
                                <a href="#sign" className="nav-link btn-custom w-125 rounded shadow text-center" id="btn-sign">Contact Us</a>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </div>

            </Navbar>
        )
    }
}
