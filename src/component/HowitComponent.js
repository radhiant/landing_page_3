import React, { Component } from 'react'

export default class HowitComponent extends Component {
    render() {
        return (
            <div className="container">
                <br /><br /><br />
                <div className="row justify-content-center my-5">
                    <h1 className="h5 text-center bold-0" data-aos="fade-up" data-aos-duration="600">HOW IT WORK</h1>
                    <h1 className="h2 text-center bold-2 mt-2 mb-5" data-aos="fade-up" data-aos-duration="600">Three Simple Step To Started Working Process</h1>
                    <div className="col-lg-4 col-md-4 my-5" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                        <h1 className="h5 text-center bold-1">Research Project</h1>
                        <br />
                        <center>
                            <p className="text-center max-width-2x">There are many variations of
                        passages of Lorem Ipsum available</p>
                        </center>
                    </div>
                    <div className="col-lg-4 col-md-4 my-5" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                        <h1 className="h5 text-center bold-1">Targeting</h1>
                        <br />
                        <center>
                            <p className="text-center max-width-2x">There are many variations of
                        passages of Lorem Ipsum available</p>
                        </center>
                    </div>
                    <div className="col-lg-4 col-md-4 my-5" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                        <h1 className="h5 text-center bold-1">Result</h1>
                        <br />
                        <center>
                            <p className="text-center max-width-2x">There are many variations of
                        passages of Lorem Ipsum available</p>
                        </center>
                    </div>

                    <div className="col-lg-6">
                        <img src="assets/content-vector.svg" width="100%" alt="content" data-aos="fade-up" data-aos-duration="600" />
                    </div>

                </div>
            </div>
        )
    }
}
