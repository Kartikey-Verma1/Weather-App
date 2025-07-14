import Card from "./Card";
import { useEffect, useRef } from "react";

const Daily = ({data}) => {
    const sliderRef = useRef(null);
    
    
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        
        const handleWheel = (e) => {
            e.preventDefault();
            slider.scrollLeft += e.deltaY;
        };
        
        slider.addEventListener('wheel', handleWheel, { passive: false });
        
        return () => {
            slider.removeEventListener('wheel', handleWheel);
        };
    }, []);
    
    
    
    if (!data?.daily) {
        return <div className="problem">Sorry this is API problem</div>;
    }
    
    const dailyData = data?.daily?.data;

    return (
        <div className="slider_container">
            <div className="slider_heading"><h2>21 Days Forecast</h2></div>
            <div className="slider" ref={sliderRef}>
                {
                    dailyData.map((weather)=>{
                        const { day, icon, temperature } = weather;
                        const { total } = weather?.precipitation;
                        const { speed } = weather?.wind;
                        return(
                            <Card 
                                date_time={day} 
                                icon_num={icon} 
                                temperature={temperature} 
                                precipitation={total} 
                                wind={speed} 
                                key={day}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Daily;