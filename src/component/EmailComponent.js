import React, { Component } from 'react'

export default class EmailComponent extends Component {
    render() {
        return (
            <div className="bg-form">
                <div className="container">
                    <br /><br /><br />
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <h1 className="h4 text-center text-white bold-2 my-3 xs-block" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">Create a new generation website for your
                        business.</h1>
                            <form action="#" method="post">
                                <div className="d-flex my-5 justify-content-between" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
                                    <h1 className="h4 text-center text-white bold-2 my-3 d-none d-lg-block d-md-block">Create a new generation website for your
                                business.</h1>
                                    <div className="position-relative box-email">
                                        <input type="email" className="form-email" placeholder="Email address" required />
                                        <button type="submit"
                                            className="btn btn-custom rounded position-absolute end-0 mt-2 me-2"><i
                                                className="fas fa-location-arrow r40 text-white"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
            </div>
        )
    }
}
