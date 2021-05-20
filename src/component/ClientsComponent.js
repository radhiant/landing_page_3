import React, { Component } from 'react'

export default class ClientsComponent extends Component {
    render() {
        return (
            <div className="bg-clients mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="h2 text-center text-white bold-2 mt-5" data-aos="fade-up" data-aos-duration="600">You're in good hand</h1>
                        <center>
                            <p className="text-center text-white bold-0 mt-2 mb-3  max-width-4x" data-aos="fade-up" data-aos-duration="600">There are many variations of
                            passages of Lorem Ipsum
                            available,
                        but the majority have suffered.</p>
                        </center>

                        <div className="col-lg-4 col-md-6 my-5">
                            <div className="card border-0 shadow" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
                                <div className="card-body">
                                    <p className="fw-light fst-italic">Life before Company was very chaotic we got a lot of phone
                                    calls, a lot of mistyped orders. So with Company, the
                                    ability
                                to see the order directly from the customer makes it so streamlined.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex">
                                        <div><img src="assets/avatar/avatar1.png" alt="img" className="mt-3" /></div>
                                        <p className="mt-3 ms-3">Martin Jones, Creative Cons</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-5">
                            <div className="card border-0 shadow" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                <div className="card-body">
                                    <p className="fw-light fst-italic">Life before Company was very chaotic we got a lot of phone
                                    calls, a lot of mistyped orders. So with
                                    Company, the
                                    ability
                                to see the order directly from the customer makes it so streamlined.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex">
                                        <img src="assets/avatar/avatar2.svg" alt="img" />
                                        <p className="mt-3 ms-3">Martin Jones, Creative Cons</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-5">
                            <div className="card border-0 shadow" data-aos="fade-up" data-aos-duration="600" data-aos-delay="800">
                                <div className="card-body">
                                    <p className="fw-light fst-italic">Life before Company was very chaotic we got a lot of phone
                                    calls, a lot of mistyped orders. So with
                                    Company, the
                                    ability
                                to see the order directly from the customer makes it so streamlined.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex">
                                        <img src="assets/avatar/avatar3.svg" alt="img" />
                                        <p className="mt-3 ms-3">Martin Jones, Creative Cons</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 my-5 d-lg-flex d-md-flex justify-content-between">
                            <img src="assets/sponsor/logo-1.svg" className="mx-2 mb-3" alt="img" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="0" />
                            <img src="assets/sponsor/logo-2.svg" className="mx-2 mb-3" alt="img" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="0" />
                            <img src="assets/sponsor/logo-3.svg" className="mx-2 mb-3" alt="img" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="0" />
                            <img src="assets/sponsor/logo-4.svg" className="mx-2 mb-3" alt="img" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="0" />
                            <img src="assets/sponsor/logo-5.svg" className="mx-2 mb-3" alt="img" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="0" />
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}
