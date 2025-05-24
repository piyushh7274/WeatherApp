import {useEffect} from 'react'
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import './App.css'
import {useWeather} from "./context/Weather"

function App() {
  const weather = useWeather();
  console.log(weather)
  
  useEffect(()=>{
    // get current location here
    weather.fetchCurrentUserLocationData();
  },[])

  // Refresh function - clears search input and shows current location
  const handleRefresh = () => {
    weather.setSearchCity(''); // Clear the input field for new entry
    weather.fetchCurrentUserLocationData(); // Show current location data
  }

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <div className="Input-Search">
        <Input/>
        <Button onClick={weather.fetchData} value="search"/>
      </div>
      <Card/>
      <Button onClick={handleRefresh} value="refresh"/>
    </div>
  )
}

export default App