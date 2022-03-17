function Datatime(props) {
    const data = require('./timetable/bus_AtoY.json');
    const Daiadata = require('./timetable/bus_calendar.json');

    const [hour, minute] = props.start.split(":").map(Number);
    const Daia = Daiadata[props.date.getMonth() + 1][props.date.getDate() - 1];
    const day = props.date.getDay();
    const Horiday = props.isHoliday;

    const check_h = (day, isHoliday) => {
        if (isHoliday) return 2;
        if (day === 5) return 1;
        return 0;
    };

    const Daiacheck = check_h(day, Horiday);

    const timetableNamelist = [
        ['train_AikantoK_w.json', 'train_AikantoK_s.json', 'train_AikantoK_h.json'],
        ['train_AikantoO_w.json', 'train_AikantoO_s.json', 'train_AikantoO_h.json'],
        ['train_LinertoF_w.json', 'train_LinertoF_s.json', 'train_LinertoF_h.json']
    ];

    const timetableName = timetableNamelist[props.route][Daiacheck];
    const trainData = require(`./timetable/${timetableName}`);

    // 第4引数にfalseを渡すと入れた時間の直前のバス/電車を返すようにしました
    const serchTime = (timetable, hour, minute, upper = true) => {
        if (timetable[hour] === undefined) return;
        const nearMinute = upper ?
            timetable[hour].find(v => minute <= v) :
            timetable[hour].reverce().find(v => minute >= v);

        if (nearMinute === undefined) {
            return serchTime(timetable, upper ? hour + 1 : hour - 1, upper ? 0 : 59);
        } else {
            return `${hour}:${nearMinute.toString().padStart(2, 0)}`
        }
    }
    const bustimeTable = serchTime(data[Daia], hour, minute)
    const traintimeTable = serchTime(trainData, hour, minute)

    const traincheck = (serchB, serchT) => {
        if (serchT === undefined) return `今日の電車はもうありません`;
        if (serchB === undefined) return serchT;

        const Daia = serchB.split(':').map(Number);
        return serchTime(trainData, Daia[0], Daia[1] + 10);
    }

    const bustime = bustimeTable ?? '今日のバスはもうありません';

    if (Daia === 3) {
        return (
            <li>
                <div className="rest_label">本日は運休です</div>
                <div className='train_label'>電車時刻表</div>
                <div className="train_data">{traintimeTable}</div>
            </li>
        );
    }

    if (true) {// <-設定によって最速かどうか切り替える
        return (
            <div className='list_item'>
                <div className="item_main">
                    <div className="bustime_prev">すぐに乗れるバスは</div>
                    <div className="bustime_data">{bustime}</div>
                    <div className="bustime_next">発です</div>
                </div>
                <div className="item_sub">
                    駅での待ち時間〇〇分<br/>
                    電車出発時間{traincheck(bustimeTable, traintimeTable)}
                </div>
            </div>
        )
    } else {
        return (
            <li className='list_item'>
                <div className='bustime_label'>適正バス出発時間</div>
                <div className="bustime_data">{bustime}</div>
                <div className='train_label'>最速電車出発時間</div>
                <div className="train_data">{traincheck(bustimeTable, traintimeTable)}</div>
            </li>
        )
    }
}


export default Datatime;
