import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import fetchWeatherData from "../utils/fetchingData";

const Home = () => {
    const [city, setcity] = useState("Delhi");
    const [loading, setloading] = useState(false);
    const [currentdata, setcurrentdata] = useState({});
    const [dailydata, setdailydata] = useState({});
    const [hourlydata, sethourlydata] = useState({});

    // useEffect(()=>{
    //     setloading(true);
    //     const fetchData = async()=>{
    //         const weatherData = await fetchWeatherData(city);
    //         if(weatherData){
    //             setcurrentdata(weatherData["current"])
    //             setdailydata(weatherData["daily"])
    //             sethourlydata(weatherData["hourly"]);
    //         }
    //         setloading(false);
    //         console.log(city);
    //     }
    //     fetchData();
    // }, [city])
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