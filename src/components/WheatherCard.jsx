import React, { useEffect, useState } from 'react'
import style from '../css/WheatherCard.module.css'
import getCityWiseWeather, { convertLongToTime } from '../logics/logics';

export default function WheatherCard(props) {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null);

    const tempDiff = 273.15;

    useEffect(()=>{
        // Function to fetch city-wise weather data
        async function fetchWeather() {
            try {
                if(props.city){
                const data = await getCityWiseWeather(props.city);
                setWeatherData(data); // Update state with fetched data
                }
            } 
            catch (error) {
                setError('Error fetching weather data'); // Update error state
            }
        }

        fetchWeather();

    }, [props.city]) // Dependency on the city prop

    

    // Conditional rendering if data or error is available
    if (error) {
        return <div>{error}</div>;
    }

    if (!weatherData) {
        return <div>Loading...</div>; // Display loading while data is being fetched
    }


  return (
    <div className={style.card_container}>
        <h1 className={style.main_heading}>Weather</h1>
        <h4 className={style.sub_heading}>{weatherData.weather[0].description.charAt(0).toUpperCase()+weatherData.weather[0].description.slice(1)} in {weatherData.name}</h4>
        {
            <img className={style.weather_icon} src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt={weatherData.weather[0].description} />
        }
        <div className={style.temprature}>
                <div>
                    <label htmlFor="Min-Temp" >Humidity</label>
                    <p>{weatherData.main.humidity}%</p>
                </div>

                <div>
                    <label htmlFor="current-Temp">Current Temp.</label>
                    <p>{(weatherData.main.temp-tempDiff).toFixed(1)} &#8451;</p>
                </div>

                <div>
                    <label htmlFor="Max-Temp">Feels Like</label>
                    <p>{(weatherData.main.feels_like-tempDiff).toFixed(1)} &#8451;</p>
                </div>
        </div>

        <div className={style.wind_main_container}>
            <div className={style.wind}>
                <label htmlFor="Min-Temp" >Wind</label>
                <span>{weatherData.wind.speed} kph</span>
            </div>

            <div className={style.wind}>
                <label htmlFor="Min-Temp" >Visibility</label>
                <span>{weatherData.visibility}</span>
            </div>

        </div>

        <div className={style.sun_rise}>
            <div className={style.sun_rise_item}>
                <label htmlFor="Min-Temp" >Sun Rise At</label>
                <span>{convertLongToTime(weatherData.sys.sunrise)} am</span>
            </div>

            <div className={style.sun_rise_item}>
                <label htmlFor="Min-Temp" >Pressure</label>
                <span>{weatherData.main.pressure} mb</span>
            </div>

            <div className={style.sun_rise_item}>
                <label htmlFor="Min-Temp" >Sun Set At</label>
                <span>{convertLongToTime(weatherData.sys.sunset)} pm</span>
            </div>

        </div>
    </div>
  )
}

