import { useState } from "react";
import { IMAGES_URL } from "../utils/constants";

const Search = ({city, setcity})=>{
    const [cityinput, setcityinput] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(cityinput == "") return;
        setcity(cityinput.charAt(0).toUpperCase() + cityinput.substring(1).toLowerCase())
    }
    return(
        <div>
            <form className="input" onSubmit={handleSubmit}>
                <label htmlFor="citySearch" id="citylabel"></label>
                <input 
                    type="text" 
                    id="citySearch" 
                    placeholder="Search City" 
                    autoComplete="off" 
                    onChange={(e)=>{setcityinput(e.target.value)}}/>
                <button 
                    type="submit"
                    id="city_submit">
                        <img src={`${IMAGES_URL}/search_icon.png`} 
                            id="search_icon"/>
                </button>
            </form>
        </div>
    )
}
export default Search;