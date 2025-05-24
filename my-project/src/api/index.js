const baseURL ="https://api.weatherapi.com/v1/current.json?key=5b9c6432fe094f589b3195122252305"

export const getWeatherDataForCity = async(city)=> {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json()
};
export const getWeatherDataForLocation = async(lat, lon)=> {
    const response = await fetch(`${baseURL}&q=${lat},${lon}aqi=yes`)
    return await response.json()
};