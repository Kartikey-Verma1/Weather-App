const fetchWeatherData = async(city)=>{
    const url1 = `https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${city}&timezone=auto&language=en&units=auto`;
    const url2 = `https://ai-weather-by-meteosource.p.rapidapi.com/daily?place_id=${city}&language=en&units=auto`;
    const url3 = `https://ai-weather-by-meteosource.p.rapidapi.com/hourly?place_id=${city}&timezone=auto&language=en&units=auto`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f4898e128fmsh88e212bd2d2dba1p1c9049jsn756e6e7a26bc',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };
    
    try {
        const response1 = await fetch(url1, options);
        const response2 = await fetch(url2, options);
        const response3 = await fetch(url3, options);
        const currentres = await response1.json();
        const dailyres = await response2.json();
        const hourlyres = await response3.json();
        return ({
            current: currentres,
            daily: dailyres,
            hourly: hourlyres
        });
    } catch (error) {
        console.error(error);
    }
    
}
export default fetchWeatherData;