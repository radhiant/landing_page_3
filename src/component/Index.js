import React, { Component } from 'react'
import BgComponent from './BgComponent'
import ClientsComponent from './ClientsComponent'
import EmailComponent from './EmailComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import HowitComponent from './HowitComponent'
import NavbarComponent from './NavbarComponent'
import PortfolioComponent from './PortfolioComponent'
import AOS from "aos"
import ScreenComponent from './ScreenComponent'

export default class Index extends Component {

    componentDidMount() {
        //load aos css
        AOS.init();

    }

    render() {
        return (
            <div>
                <ScreenComponent />
                <BgComponent />
                <NavbarComponent />
                <HeaderComponent />
                <HowitComponent />
                <ClientsComponent />
                <PortfolioComponent />
                <EmailComponent />
                <FooterComponent />
            </div>
        )
    }
}
