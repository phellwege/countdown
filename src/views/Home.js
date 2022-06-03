import React, { useState } from 'react';
import './Home.css';
import {ReactComponent as Facebook} from '../static/icon-facebook.svg';
import {ReactComponent as Pinterest} from '../static/icon-pinterest.svg';
import {ReactComponent as Instagram} from '../static/icon-instagram.svg';
export default (props) => {

    function countDownFun() {

    }

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
                    <Facebook className="svg"/>
                    <Pinterest className="svg"/>
                    <Instagram className="svg"/>
                </div>
            </div>
        </>
    )
}

