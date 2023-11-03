import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e7f53bb9223932edd1a2c092b4dd5c34`

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }

  useEffect(() => {
    getData().then((result) => {
      setData(result)
    })
  }, [])

  const search = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      setLocation('')
    }
  }

  return (
    <div className="w-full h-screen text-white bg-cloud bg-cover">
      <div className='justify-center items-center mx-auto flex flex-col max-w-screen-lg'>
        <div className='m-5 p-3'>
          <input type="text" value={location} onKeyPress={search} onChange={event => setLocation(event.target.value)} className='rounded-xl p-2 text-2xl bg-white bg-opacity-10' placeholder='Input City..' />
          {/* <p>{data.name}</p> */}
        </div>

        <div className='flex flex-col md:flex-row justify-between w-full p-3 mt-20 mb-0 md:mb-20'>
          <div className=''>
            <p className=' text-3xl'>{data.name}</p>
            {data.main ? <p className='text-7xl md:text-9xl'>{data.main.temp}°C</p> : null}
          </div>
          <div className='mt-40 md:mt-0 text-4xl my-auto text-center'>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        <div className='flex flex-row gap-5 bg-slate-700 p-3 rounded-lg bg-opacity-50 text-2xl text-center'>
          <div>
            {data.main ? <p>{data.main.humidity}</p> : null}
            <p>Humidity</p>
          </div>
          <div>
            {data.main ? <p>{data.main.pressure}</p> : null}
            <p>Pressure</p>
          </div>
          <div>
            {data.wind ? <p>{data.wind.deg}</p> : null}
            <p>Wind</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App