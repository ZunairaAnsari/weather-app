import { useEffect, useState } from 'react';
import { TiWeatherCloudy } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";


const Weather = () => {
  const weatherIcons = {
    Clear: 'sun',
    Clouds: 'cloud',
    Smoke: 'cloud-showers-heavy',

  };
  const [city, setCity] = useState('Karachi');
  const [cityName, setCityName] = useState("");
  const [result, setResult] = useState({})
  const API = {
    key: 'f0adf1349da0edbee050d79c6def2456',
    url: 'https://api.openweathermap.org/data/2.5/weather'
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    setCity(cityName);
    setCityName("");
  };

  useEffect(() => {
    fetch(`${API.url}?q=${city}&appid=${API.key}&units=metric`)
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
    <><h2 className='heading'>Weather ForeCast</h2>
      <div className='container'>
      <div className='search-bar'>
          <input
            type="text"
            placeholder='Enter city...'
            style={{ color: 'white' }}
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <span className='icon'>
          <FaSearch />
          </span>
        </div>
        <div className='top'>
          <div className='location'><p>{result.name}</p></div>
          <div className='temperature'>{
            result.main ? <h1>{result.main.temp.toFixed()}°C</h1> : null
          }</div>
          <div className='description'>
            {result.weather && (
              <>
                <TiWeatherCloudy icon={weatherIcons[result.weather[0].main]} />
                <p>{result.weather[0].description}</p>
              </>
            )}
          </div>
          {/* <div className='description'>{result.main && result.weather[0].description}</div> */}
        </div>

        {result.name !== undefined &&
          <div className='bottom'>
            {result.main && result.weather && (
              <>
                <div className='feels'>
                  <p className='bold'>{result.main.feels_like.toFixed()} °C</p>
                  <p>Feels Like</p>
                </div>
                <div className='humidity'>
                  <p className='bold'>{result.main.humidity.toFixed()}%</p>
                  <p>Humidity</p>
                </div>
                <div className='wind'>
                  <p className='bold'>{result.wind.speed.toFixed()} MPH</p>
                  <p>Wind Speed</p>
                </div>
              </>
            )}
          </div>}
        <div></div>
      </div>
    </>
  );

}

export default Weather;