import { useEffect, useState } from 'react';
import { TiWeatherCloudy } from "react-icons/ti"; 
const Weather = () => {
    const [city, setCity] = useState('Karachi');
    const [cityName, setCityName] = useState("");
    const [result, setResult] = useState({})
    const API = {
      key : 'f0adf1349da0edbee050d79c6def2456',
      url : 'https://api.openweathermap.org/data/2.5/weather'
    }
  
    const handleClick = () => {
      setCity(cityName)
    }
    useEffect(() => {
      fetch(`${API.url}?q=${city}&appid=${API.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResult(data);
      })
    }, [city, API.key, API.url])
  //  console.log(result);
  
  
    // console.log(result.weather[0].description);
    // const {name , main} = result
    // const {temp} = main
    // console.log(name, main)
    // console.log(temp)
    return (
        <>
        <div>
        <h1>Weather App</h1>
        <div>
        <input type="text" placeholder='' id='' name='' onChange={(e) => {setCityName(e.target.value)}} />
        <button onClick={handleClick}>Search</button>
        </div>
        <h2>{result.main && result.main.temp}°F</h2>
        <h1 ><TiWeatherCloudy style={{color : "skyblue"}}/>{result.main && result.weather[0].description}</h1>
        </div>
        </>
    );

}

export default Weather;