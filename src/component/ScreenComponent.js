import React, { Component } from 'react'
export default class ScreenComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hideElm: 'fadeOut',
            fullS: '',
            exitfullS: 'd-none'
        }

        this.openFull = this.openFull.bind(this);
        this.exitFull = this.exitFull.bind(this);
        this.onTop = this.onTop.bind(this);
    }

    onTop() {
        window.scrollTo(0, 0);
    }

    openFull() {
        var elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }

        this.setState({
            fullS: 'd-none',
            exitfullS: 'd-block'
        });
    }

    exitFull() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        this.setState({
            fullS: 'd-block',
            exitfullS: 'd-none'
        });
    }

    componentDidMount() {
        // Onscroll 
        window.addEventListener('scroll', () => {
            let hideElm = 'fadeIn';
            if (window.scrollY === 0) {
                hideElm = 'fadeOut';
            }
            this.setState({ hideElm });
        });
    }

    render() {
        return (
            <div>
                {/*  Up Button */}
                <button className={`btn btn-dark btn-up text-center shadow ${this.state.hideElm}`} onClick={this.onTop}>
                    <i className="fas fa-chevron-up text-white"></i>
                </button>

                {/*  Fullscreen Button  */}
                <button className={`btn btn-dark btn-full text-center shadow ${this.state.fullS}`} onClick={this.openFull}>
                    <i className="fas fa-expand text-white"></i></button>
                <button className={`btn btn-dark btn-full text-center shadow ${this.state.exitfullS}`} onClick={this.exitFull}>
                    <i className="fas fa-compress text-white"></i>
                </button>
            </div>
        )
    }
}
