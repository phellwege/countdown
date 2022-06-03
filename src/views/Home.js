import React, { useState } from 'react';
import './Home.css';

export default (props) => {

    return (
        <>
            <div className="HomeWrap">
                <h4>WE'RE LAUNCHING SOON</h4>
                <div className="timerWrap">
                    <div>
                        DAYS
                    </div>
                    <div>
                        HOURS
                    </div>
                    <div>
                        Minutes
                    </div>
                    <div>
                        Seconds
                    </div>
                </div>
                <div className="socialSection">
                    social links
                </div>
            </div>
        </>
    )
}

