import { useEffect, useRef } from "react";

const Shimmer = ()=>{
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    useEffect(()=>{
        const sliders = [sliderRef1.current, sliderRef2.current];
        
        sliders.forEach((slider)=>{
            const handleWheel = (e)=>{
            e.preventDefault();
                slider.scrollLeft += e.deltaY;
            };
            
            slider.addEventListener("wheel", handleWheel, {passive: false});
            
            return () => {
                slider.removeEventListener('wheel', handleWheel);
            };
        })
    },[])

    return(
        <div className="shimmer_body">
            <div className="shimmer_current">
                <div className="shimmer_current_card1"></div>
                <div className="shimmer_current_card2"></div>
            </div>
            <div className="shimmer_slider_container" >
                <div className="shimmer_slider" ref={sliderRef1}>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                </div>
            </div>
            <div className="shimmer_slider_container">
                <div className="shimmer_slider"ref={sliderRef2}>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                    <div className="shimmer_slider_card"></div>
                </div>
            </div>
        </div>
    )
}
export default Shimmer;