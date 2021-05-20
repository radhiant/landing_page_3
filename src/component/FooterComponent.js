import React, { Component } from 'react'

export default class FooterComponent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <br /><br /><br />
                    <div className="row justify-content-start">
                        <div className="col-lg-4">
                            <div className="row" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
                                <h1 className="h4 bold-2">Interactive art</h1>
                                <p className="max-width-2x my-3">Within coming figure sex things are.
                                Pretended concluded did repulsive
                                education smallness yet yet described.
                        Had country man his pressed shewing.</p>
                            </div>
                            <br />
                        </div>
                        <div className="col-lg-3">
                            <div className="row" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                <h1 className="h6 mb-4">Userful Links</h1>
                                <a href="#home" className="link mb-2">Home</a><br />
                                <a href="#about" className="link mb-2">About Us</a><br />
                                <a href="#services" className="link mb-2">Services</a><br />
                                <a href="#blog" className="link mb-2">Blog</a><br />
                                <a href="#contact" className="link mb-2">Contact</a><br />
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="row" data-aos="fade-up" data-aos-duration="600" data-aos-delay="800">
                                <h1 className="h6 mb-4">Need Help?</h1>
                                <a href="#faqs" className="link mb-2">Faqs</a><br />
                                <a href="#privacy" className="link mb-2">Privacy</a><br />
                                <a href="#policy" className="link mb-2">Policy</a><br />
                                <a href="#support" className="link mb-2">Support</a><br />
                                <a href="#terms" className="link mb-2">Terms</a><br />
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="row" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1200">
                                <h1 className="h6 mb-4">Contact</h1>
                                <a href="#facebook" className="link mb-2">Facebook</a><br />
                                <a href="#linkedin" className="link mb-2">Linkedin</a><br />
                                <a href="#twitter" className="link mb-2">Twitter</a><br />
                                <a href="#telegram" className="link mb-2">Telegram</a><br />
                                <a href="#whatsapp" className="link mb-2">Whatsapp</a><br />
                                <br />
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />

                </div>

                <hr />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-between">
                            <span className="color-theme mb-3">Copyright © 2021</span>
                            <span className="mb-3">
                                Created with <i className="fas fa-heart text-danger"></i> by <a href="https://github.com/radhiant"
                                    className="text-primary fw-bold" target="_blank" rel="noopener noreferrer">Radhian Sobarna</a>
                            </span>
                            <span className="color-theme mb-3 d-none d-lg-block d-md-block">Interactive ART Company All rights reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
