import React from 'react';
import './Home.css';
import {ReactComponent as Facebook} from '../static/icon-facebook.svg';
import {ReactComponent as Pinterest} from '../static/icon-pinterest.svg';
import {ReactComponent as Instagram} from '../static/icon-instagram.svg';
import BgMtn from '../static/pattern-hills.svg';

export default (props) => {

    var countDownDate = new Date("Jul 29, 2025 15:37:25").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
        if (distance < 0) {
        clearInterval(x);
        document.getElementById("days", "hours", "minutes", "seconds").innerHTML = "EXPIRED";
        }
    }, 1000);

    return (
        <>
            <div className="HomeWrap">
                <h4>WE'RE LAUNCHING SOON</h4>
                <div className="timerWrap">
                    <div>
                        <span id='days' className='timeBG'></span>
                        <span className="timerSubText">
                            DAYS
                        </span>
                    </div>
                    <div>
                        <span id='hours' className='timeBG'></span>
                        <span className="timerSubText">
                            HOURS
                        </span>
                    </div>
                    <div>
                        <span id='minutes' className='timeBG'></span>
                        <span className="timerSubText">
                            MINUTES
                        </span>
                    </div>
                    <div>
                        <span id='seconds' className='timeBG'></span>
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
                <img src={BgMtn} className='Mtn'/>
            </div>
        </>
    )
}

