import React, { Component } from 'react'

export default class BgComponent extends Component {
    render() {
        return (
            <div>
                <img src="assets/header-bg.svg" className="position-absolute top-0 end-0 d-none d-lg-block" alt="bg" />
                <img src="assets/header-vector.svg" className="position-absolute img-header top-0 end-0 d-none d-lg-block" alt="bg" />
                <img src="assets/header-vector.svg" width="100%" className="d-lg-none" alt="bg" />
            </div>
        )
    }
}
