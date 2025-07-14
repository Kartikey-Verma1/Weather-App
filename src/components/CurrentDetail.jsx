import { PERCENTAGE, SPEED_UNIT, DIST_UNIT, PRECIPITATION_UNIT } from "../utils/units.js";
import { ICON_URL } from "../utils/constants.js";

const CurrentDetail = ({humidity, uv_index, visibility, speed, precipitation, cloud_cover})=>{
    return (
        <div className="current_details">
            <div className="details">
                <div className="icon_and_value">
                    <img src={`${ICON_URL}/precipitation.png`} alt="" id="icons"/>
                    <p>{`${precipitation} ${PRECIPITATION_UNIT}`}</p>
                </div>
                <p id="icon_name">Precipitation</p>
            </div>
            <div className="details">
                <div className="icon_and_value">
                    <img src={`${ICON_URL}/wind_speed.png`} alt="" id="icons"/>
                    <p>{`${speed} ${SPEED_UNIT}`}</p>
                </div>
                <p id="icon_name">Wind</p>
            </div>
            <div className="details">
                <div className="icon_and_value">
                    <img src={`${ICON_URL}/humidity.png`} alt="" id="icons"/>
                    <p>{`${humidity} ${PERCENTAGE}`}</p>
                </div>
                <p id="icon_name">Humidity</p></div>
            <div className="details">
                <div className="icon_and_value">
                    <img src={`${ICON_URL}/uv_index.png`} alt="" id="icons1"/>
                    <p>{`${uv_index}`}</p>
                </div>
                <p id="icon_name">UV_Index</p>
            </div>
            <div className="details">
                <div className="icon_and_value">
                    <img src={`${ICON_URL}/cloud_cover.png`} alt="" id="icons1"/>
                    <p>{`${cloud_cover} ${PERCENTAGE}`}</p>
                </div>
                <p id="icon_name">Clouds Cover</p>
            </div>
            <div className="details">
                <div className="icon_and_value">
                    <img src={`${ICON_URL}/visibility.png`} alt="" id="icons"/>
                    <p>{`${visibility} ${DIST_UNIT}`}</p>
                </div>
                <p id="icon_name">Visibility</p>
            </div>
        </div>
    )
}
export default CurrentDetail;