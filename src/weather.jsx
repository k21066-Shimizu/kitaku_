import React from 'react';

async function getWether () {
    const codelist = require('./data/weathercode_WMO.json');
    const { current_weather } = await getAPI('https://api.open-meteo.com/v1/forecast', {
        longitude: 137.1098,
        latitude: 35.1823,
        timezone: 'Asia/Tokyo',
        current_weather: true
    });

    return (
        <>
            { codelist[current_weather.weathercode] }<br/>
            { current_weather.temperature }℃
        </>
    );
}

async function getAPI (endpoint, query) {
    const queryParse = (param) => {
        let ret = [];
        for (const key of Object.keys(param)) {
            ret.push(`${key}=${Array.isArray(param[key]) ? param[key].join(',') : String(param[key])}`);
        }

        return ret.length ? `?${ret.join('&')}` : '';
    };

    const res = await fetch(endpoint + queryParse(query));

    if (res.status !== 200) throw Error('APIの読み込みに失敗しました');

    return await res.json();
}

export default getWether;