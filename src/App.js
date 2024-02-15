import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState([]);
  const[input,setInput] = useState('');


  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1046035d01msh67d7df459558ed4p18f2cejsnc6509f6fa336',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };


  async function handleFetch() {
     console.log(input)
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result)
    } catch (error) {
      console.error(error);
    }

  }

     
 
     function handleOnClick(){
        console.log(input)
     }

  useEffect(() => {
    handleFetch();
  }, [])
  return (
    <div>

      <div class="card">
        {/* <Search /> */}
        <div class="search-bar">
      <input type="text"value={input} onChange={(e)=>setInput(e.target.value)} class="search-input" placeholder="Search..."/>
      <button onClick={handleFetch} class="search-btn">Search</button>
    </div>

            <div className='second-part'>
           
              <h5>Temprature : {data.temp} °C</h5>
              <h5>humidity: {data.humidity}</h5>
              <h5>wind_speed: {data.wind_speed}</h5>

            </div>

      </div>

    </div>
  );
}

export default App;
