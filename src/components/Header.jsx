import { Link } from "react-router-dom";
import { APP_ICON_URL } from "../utils/constants";
import { IMAGES_URL } from "../utils/constants";
import { useState, useRef, useEffect } from "react";

const Header = () => {
    const [isOpen, setisOpen] = useState(false);
    const dropRef = useRef(null);
    const toggleDropdown = (e)=>{
        e.stopPropagation();
        setisOpen(!isOpen)
    }
    useEffect(()=>{
        const clickhandler = (e)=>{
            if(!dropRef.current.contains(e.target)) setisOpen(false);
        }
        if(isOpen){
            window.addEventListener("click", clickhandler)
        }
        return () => {
            window.removeEventListener("click", clickhandler); // right — returns a function
        };
    },[isOpen]);
    return (
        <div className="header">
            <div className="left_side">
                <img src={APP_ICON_URL} className="app_icon"></img>
                <h1 className="appHead"><span className="weather">Weather</span> Application</h1>
                
            </div>
            <div className="right_side">
                <ul className="header_list">
                    <li className='head-list-item'><Link to="/">HOME</Link></li>
                    <li className='head-list-item item2' >

                        <div onClick={toggleDropdown}>
                            ABOUT THIS APP
                            <img src={`${IMAGES_URL}/dropdown.png`} className="dropimg"/>
                        </div>
                        {isOpen && (
                            <ul className="dropdown-menu" ref={dropRef}>
                                <li><Link to="/overview" onClick={toggleDropdown}>Overview</Link></li>
                                <li>Technologies Used</li>
                                <ul className="tech_used">
                                    <div className="left_tech">
                                        <li>React</li>
                                        <li>React Router</li>
                                        <li>JavaScript</li>
                                    </div>
                                    <div className="right_tech">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Weather API</li>
                                    </div>
                                </ul>
                            </ul>
                        )}
                        
                    </li>
                    <li className='head-list-item'><Link to="/contact">CONTACT US</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;