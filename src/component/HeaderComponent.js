import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className="container position-relative">

                <div className="d-none d-lg-block">
                    <br /><br /><br />
                </div>

                <div className="row my-5">

                    <div className="col-lg-6">
                        <div className="row">
                            <h1 className="bold-1 mt-5 mb-3 h2" data-aos="fade-up" data-aos-duration="600">Create a new generation <br /> website for your business.</h1>
                            <p className="max-width-4x bold-0" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <div className="d-flex my-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1200">
                                <a href="#contact" className="btn btn-success p-3 rounded shadow">Contact Us</a>
                                <a href="#works" className="btn btn-blue p-3 ms-3 rounded shadow"><i
                                    className="fas fa-layer-group text-white me-1"></i> See our works</a>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="display-space d-none d-lg-block">
                    <br /><br /><br /><br /><br /><br />
                </div>

            </div>
        )
    }
}
