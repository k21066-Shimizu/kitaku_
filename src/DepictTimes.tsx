import React from "react";
import CalcBusTrainTime from "./CalcBusTrainTime";
import './Snap.scss'

function DepictTimes(props: Parameters<typeof CalcBusTrainTime>[0]) {
    const { busTime, trainTime, status } = CalcBusTrainTime(props);

    return (<div id="time-list">
        <div className="time-set">
            <div className="bus-wrapper">バスの時間</div>
            <div className="train-wrapper">電車の時間</div>
        </div>
        <div className="time-set">
            <div className="bus-wrapper">
                <div className="bus-time">11:26</div>
                <div className="bus-time">06:43</div>
                <div className="bus-time">14:53</div>
            </div>
            <div className="train-wrapper">
                <div className="train-time">16:32</div>
            </div>
        </div>
        <div className="time-set">
            <div className="bus-wrapper">
                <div className="bus-time">07:03</div>
            </div>
            <div className="train-wrapper">
                <div className="train-time">03:28</div>
            </div>
        </div>
        <div className="time-set">
            <div className="bus-wrapper">
                <div className="bus-time">12:52</div>
                <div className="bus-time">19:44</div>
            </div>
            <div className="train-wrapper">
                <div className="train-time">22:08</div>
            </div>
        </div>
    </div>);
}

export default DepictTimes;
