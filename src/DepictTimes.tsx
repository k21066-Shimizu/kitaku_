import React from "react";
import CalcBusTrainTime from "./CalcBusTrainTime";
import './Snap.css'

function DepictTimes(props: Parameters<typeof CalcBusTrainTime>[0]) {
    const { busTime, trainTime, status } = CalcBusTrainTime(props);

    return (<div id="time-list">
        <div className="time-item">
            <div className="bustime-label">バスの時間</div>
            <div className="bustime-data">12:34</div>
            <div className="bustime-data">12:39</div>
            <div className="bustime-data">12:56</div>
            <div className="traintime-head">次に来る電車は</div>
            <div className="traintime-data">13:05</div>
            <div className="traintime-tail">です</div>
        </div>
        <div className="time-item">
            <div className="bustime-label">バスの時間</div>
            <div className="bustime-data">12:34</div>
            <div className="bustime-data">12:39</div>
            <div className="bustime-data">12:56</div>
            <div className="traintime-head">次に来る電車は</div>
            <div className="traintime-data">13:05</div>
            <div className="traintime-tail">です</div>
        </div>
        <div className="time-item">
            <div className="bustime-label">バスの時間</div>
            <div className="bustime-data">12:34</div>
            <div className="bustime-data">12:39</div>
            <div className="bustime-data">12:56</div>
            <div className="traintime-head">次に来る電車は</div>
            <div className="traintime-data">13:05</div>
            <div className="traintime-tail">です</div>
        </div>
    </div>);
}

export default DepictTimes;
