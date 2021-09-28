import React from 'react'
import {Card, Table} from "react-bootstrap";
import trading from '../../assets/Images/trading.svg'
import filter from '../../assets/Images/filter.svg'
import './Tradinghistory.scss'
function Tradinghistory() {
    return (
        <React.Fragment>
            <div className="profile-desc">
                <Card>
                    <Card.Header className="table-head">
                        <div>
                            <img src={trading} />    Trading History
                        </div>
                        <div>
                            <img src={filter} />    Filter
                        </div>
                    </Card.Header>

                    <div className="table-responsive trading-table">
                        <Table striped >
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Price</th>
                                    <th>From</th>
                                    <th>To</th>

                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="5" className="trading-text">
                                        <p> No trading history yet</p>
                                    </td>


                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default Tradinghistory
