import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import fetchWeatherData from "../utils/fetchingData";
import current_weather from "../utils/current_api.js";
import daily_weather from "../utils/daily_api";
import hourly_weather from "../utils/hourly_api";

const Home = () => {
    const [city, setcity] = useState("Delhi");
    const [loading, setloading] = useState(true);
    const [currentdata, setcurrentdata] = useState({});
    const [dailydata, setdailydata] = useState({});
    const [hourlydata, sethourlydata] = useState({});

    useEffect(()=>{
        setloading(true);
        const fetchData = async()=>{
            let weatherData;
            // weatherData = await fetchWeatherData(city); // uncomment it to use live api
            if(weatherData){
                setcurrentdata(weatherData["current"])
                setdailydata(weatherData["daily"])
                sethourlydata(weatherData["hourly"]);
            }
            else{
                setcurrentdata(current_weather)
                setdailydata(daily_weather)
                sethourlydata(hourly_weather);
            }
            setloading(false);
        }
        fetchData();
    }, [city])
    const renderContent = ()=>(
        <div>
            <Search city={city} setcity={setcity}/>
            <Current data={currentdata} city={city}/>
            <Hourly data={hourlydata}/>
            <Daily data={dailydata}/>
        </div>
    )
    return (
        <div className="home">
            {loading ? (<Shimmer />): (renderContent())
            }
        </div>
    )
}
export default Home;