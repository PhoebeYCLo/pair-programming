import React, { Component } from 'react'

class ReportList extends Component {
    render() {
        return (
            <div className="report__content">
                <div className="report__container">
                    <div className="report__header">
                        Report List
                    </div>
                    <div className="divider"></div>
                    <div className="report__body">
                        <div className="report__card">
                            <div className="report__listItem">
                                <label>Call Type</label>
                                <p>Lights</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReportList;