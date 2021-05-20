import React, { Component } from 'react'

export default class PortfolioComponent extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="h5 text-center bold-0" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">PORTFOLIO</h1>
                        <h1 className="h2 text-center bold-2 mt-2 mb-5" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">Three Simple Step To Started Working Process</h1>

                        <div className="col-lg-4 col-md-6 my-3">
                            <div className="card border-0 shadow rounded" data-aos="fade-up" data-aos-duration="600">
                                <div className="card-body p-0">
                                    <img src="assets/portfolio/portfolio1.png" width="100%" className="img" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-3">
                            <div className="card border-0 shadow rounded" data-aos="fade-up" data-aos-duration="600">
                                <div className="card-body p-0">
                                    <img src="assets/portfolio/portfolio2.png" width="100%" className="img" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-3">
                            <div className="card border-0 shadow rounded" data-aos="fade-up" data-aos-duration="600" >
                                <div className="card-body p-0">
                                    <img src="assets/portfolio/portfolio3.png" width="100%" className="img" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-3">
                            <div className="card border-0 shadow rounded" data-aos="fade-up" data-aos-duration="600">
                                <div className="card-body p-0">
                                    <img src="assets/portfolio/portfolio4.png" width="100%" className="img" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-3">
                            <div className="card border-0 shadow rounded" data-aos="fade-up" data-aos-duration="600">
                                <div className="card-body p-0">
                                    <img src="assets/portfolio/portfolio5.png" width="100%" className="img" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-3">
                            <div className="card border-0 shadow rounded" data-aos="fade-up" data-aos-duration="600">
                                <div className="card-body p-0">
                                    <img src="assets/portfolio/portfolio6.png" width="100%" className="img" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12"><br /><br /><br /></div>
                    </div>
                </div>

                <div className="modal fade" role="dialog" id="imgmodal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content"></div>
                        <img className="img-responsive" src="" id="show-img" width="100%" alt="img" />
                    </div>
                </div>
            </div>
        )
    }
}
