import hourly_weather from "../utils/hourly_api"
import React, { useRef, useEffect } from 'react';
import Card from "./Card"

const Hourly = ({data})=>{
    
    const sliderRef = useRef(null);
    
    useEffect(()=>{
        const slider = sliderRef.current;
        
        if(!slider) return;
        
        const handleWheel = (e)=>{
            e.preventDefault();
            slider.scrollLeft += e.deltaY;
        };
        
        slider.addEventListener("wheel", handleWheel, {passive: false});
        
        return () => {
            slider.removeEventListener('wheel', handleWheel);
        };
    },[])
    
    
    // if (!data?.hourly) {
    //     return <div>Loading current weather...</div>;
    // }
    
    // const hourlyData = data?.hourly?.data;
    const hourlyData = hourly_weather?.hourly?.data;

    return(
        <div className="slider_container">
            <div className="slider_heading"><h2>Hourly Forecast</h2></div>
            <div className="slider" ref={sliderRef}>
                {
                    hourlyData.map((weather)=>{
                        const { date, icon, temperature } = weather;
                        const date_time = date.substring(11,16);
                        const { total } = weather?.precipitation;
                        const { speed } = weather?.wind;
                        return(
                            <Card 
                                date_time={date_time} 
                                icon_num={icon} 
                                temperature={temperature} 
                                precipitation={total} 
                                wind={speed} 
                                key={date}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Hourly;