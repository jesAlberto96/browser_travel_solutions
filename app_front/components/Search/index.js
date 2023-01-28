import searchStyles from './Search.module.css'
import React, { useState } from 'react';



const Search = () => {
    const [data, setData] = useState(false);

    const handleSubmit = async (event) => {
        if (event.key === 'Enter') {
            getWeather(event.target.value);
        }
    }

    const useMap = async (lat, lng) => {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat, lng},
            zoom: 8
        });
    }
    
    const getWeather = async (value) => {
        if (value != ''){
            const res = await fetch(`http://127.0.0.1:8000/api/weather/${value}`)
            const response = await res.json()
    
            if (response.success){
                const lat = response.data.coord.lat;
                const lng = response.data.coord.lon;
                setData(response.data.main);
                useMap(lat, lng);
            } else {
                setData(false);
            }
        }
    }

    return (
        <div className={searchStyles.contentSearch}>
            <h1 className={searchStyles.title}>
                Weather Cities
            </h1>

            <div className={searchStyles.grid}>
                <div className={searchStyles.card}>
                    <div className={searchStyles.form__group}>
                        <input type="text" className={searchStyles.form__field} placeholder="Type cities to search and press enter" onKeyDown={handleSubmit} autoComplete="off" name="name" id='name' required />
                    </div>
                </div>
            </div>
            

            {data != false ? (
                <div className={searchStyles.gridResult}>
                    <b>Feels like: </b> {data.feels_like}<br/>
                    <b>Humidity: </b> {data.humidity}<br/>
                    <b>Pressure: </b> {data.pressure}<br/>
                    <b>Temp: </b> {data.temp}<br/>
                    <b>Temp Max: </b> {data.temp_max}<br/>
                    <b>Temp Min: </b> {data.temp_min}<br/>
                </div>
            ) : (
                <div></div>
            )}

            <div id="map"></div>

            <style jsx global>{`
                #map {
                    height: 400px;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export default Search