import CurrentDetail from "./CurrentDetail.jsx";
import { TEMP_UNIT } from "../utils/units.js";
import { WEATHER_ICON_URL } from "../utils/constants.js";

const Current = ({data, city})=>{

    const currentWeather = data;

    if(data?.message){
        return <div className='problem'>{data?.message}</div>
    }

    if (!currentWeather?.current) {
        return <div className="problem">Sorry this is API problem</div>;
    }

    const {temperature, feels_like, cloud_cover, humidity, uv_index, visibility, icon_num} = currentWeather?.current
    const {speed} = currentWeather?.current?.wind
    const precipitation = currentWeather?.current?.precipitation?.total
    return (
        <div className="current">
            <div className="current_weather">

                <div className="place">
                    <img src={`${WEATHER_ICON_URL}/${icon_num}.png`} alt="" id="weather_icon"/>
                    <div className="temp_detail">
                        <p id="temp_main">{temperature}{TEMP_UNIT}</p>
                        
                        <p id="feels_like_main">feels like: {feels_like}{TEMP_UNIT}</p>

                        <p id="clouds_main">{
                            cloud_cover < 10
                            ? "Clear"
                            : cloud_cover < 25
                            ? "Mostly Clear"
                            : cloud_cover < 50
                            ? "Partly Cloudy"
                            : cloud_cover < 70
                            ? "Mostly Cloudy"
                            : "Cloudy"
                        }</p>
                    </div>
                </div>
                <p className="area">{city}</p>

            </div>
            <CurrentDetail humidity={humidity} visibility={visibility} uv_index={uv_index} speed={speed} precipitation={precipitation} cloud_cover={cloud_cover}/>
            
        </div>
    )
}
export default Current;