import React, { useState } from "react";
import image from "../assets/userprofile.jpg"


function Covers(){
    const [isHover, setIsHover] = useState(false);

    function updateIsHover(){
        setIsHover(!isHover)
    }

    return (
        <>
            <a href="">
                <div className="flex flex-col gap-5 relative">
                    <img src={image} alt="" className="w-[192px] h-[249px] rounded-sm hover:scale-110" onMouseOver={updateIsHover} onMouseOut={updateIsHover} />
                    <span className={`absolute top-[-10px] left-[170px] rounded-full bg-[#4880FF] text-white font-bold p-1 ${isHover ? "scale-110 top-[-15px] left-[175px]" : "" }`}>Up</span>
                    <div className="flex flex-col">
                        <h6 className="font-[800]">Title</h6>
                        <span className="opacity-40">Test</span>

                        <span className="font-[700] opacity-40 hover:text-[#4880FF] hover:opacity-110">Chapter 1</span>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Covers;