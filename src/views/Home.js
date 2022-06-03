import React, { useState } from 'react';
import './Home.css';

export default (props) => {

    return (
        <>
            <div className="HomeWrap">
                <h4>WE'RE LAUNCHING SOON</h4>
                <div className="timerWrap">
                    <div>
                        Number
                        <span className="timerSubText">
                            DAYS
                        </span>
                    </div>
                    <div>
                        Number
                        <span className="timerSubText">
                            HOURS
                        </span>
                    </div>
                    <div>
                        Number
                        <span className="timerSubText">
                            MINUTES
                        </span>
                    </div>
                    <div>
                        Number
                        <span className="timerSubText">
                            SECONDS
                        </span>
                    </div>
                </div>
                <div className="socialSection">
                    social links
                </div>
            </div>
        </>
    )
}

