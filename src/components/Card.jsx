import { TEMP_UNIT, SPEED_UNIT, PRECIPITATION_UNIT } from "../utils/units";
import { WEATHER_ICON_URL } from "../utils/constants";

const Card = ({date_time, icon_num, temperature, precipitation, wind})=>{
    return(
        <div className="card">
            <p className="date_time">{date_time}</p>
            <img src={`${WEATHER_ICON_URL}/${icon_num}.png`} alt="" />
            <p className="temperature">{`${temperature} ${TEMP_UNIT}`}</p>
            <p className="precipitation">{`${precipitation} ${PRECIPITATION_UNIT}`}</p>
            <p className="wind">{`${wind} ${SPEED_UNIT}`}</p>
        </div>
    )
}
export default Card;