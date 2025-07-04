import React from "react";
import logo from "/logo.jpg"
import { ArrowLeftToLine, CircleQuestionMark,House, NotebookPen, BookHeart, Globe} from 'lucide-react';


function Sidebar(props){
    const isExpanded = props.isExpanded
    return (
        <>
            <aside className={`${isExpanded ? "w-[240px]" : "w-[86px]"} h-full bg-[#FFFFFF] transition-all ease-in-out delay-50`}>
                <div className={`w-full p-[24px] mb-[6px] ${isExpanded ? "flex" : "flex-col"} gap-[15px] transition-all ease-in-out delay-50 justify-center items-center`}>
                    <img src={logo} alt="logo img" className={`w-[40px] h-[40px] rounded-full transition-all ease-in-out delay-50 ${isExpanded ? "mb-[0]" : "mb-[15px]"}`}/>
                    <h1 className={`w-[129px] font-extrabold text-x1 bg-gradient-to-r from-[#4880FF] to-[#202224] text-transparent bg-clip-text transition-all ease-in-out delay-50 ${isExpanded ? "block" : "hidden"}`}>FA-Library</h1>
                    <button onClick={() =>{
                        props.updateState(!isExpanded);
                    }} className="bg-[#E6E8F0] p-[5px] rounded-sm transition-all ease-in-out delay-50">
                        <div className={`transition-all ease-in-out delay-50 ${isExpanded ? "" : "rotate-180"}`}>
                            <ArrowLeftToLine color="black" />
                        </div>
                    </button>
                </div>

                <div className="w-full flex-col gap-[18px]">
                    <div className={`w-full flex group ${isExpanded ? "gap-[20px]" : "gap-[10px]"}`}>
                        <div className="w-[9px] h-[50px] bg-white group-hover:bg-[#4880FF] rounded-r-sm rounded-b-sm rounded-bl-none"></div>
                        <div className={`w-[192px] h-[50px] flex p-[16px] items-center ${isExpanded ? "gap-[16px] group-hover:bg-[#4880FF] group-hover:text-white" : "group-hover:text-[#4880FF] text-[#979797]"}  rounded-sm`}>
                            <House />
                            <a href="#" className={`transition-all ease-in-out delay-50 font-semibold ${isExpanded ? "block" : "hidden"}`}>Home</a>
                        </div>
                    </div>
                    <div className={`w-full flex group ${isExpanded ? "gap-[20px]" : "gap-[10px]"}`}>
                        <div className="w-[9px] h-[50px] bg-white group-hover:bg-[#4880FF] rounded-r-sm rounded-b-sm rounded-bl-none"></div>
                        <div className={`w-[192px] h-[50px] flex p-[16px] items-center ${isExpanded ? "gap-[16px] group-hover:bg-[#4880FF] group-hover:text-white" : "group-hover:text-[#4880FF] text-[#979797]"}  rounded-sm`}>
                            <BookHeart />
                            <a href="#" className={`transition-all ease-in-out delay-50 font-semibold ${isExpanded ? "block" : "hidden"}`}>Favourite</a>
                        </div>
                    </div>
                    <div className={`w-full flex group ${isExpanded ? "gap-[20px]" : "gap-[10px]"}`}>
                        <div className="w-[9px] h-[50px] bg-white group-hover:bg-[#4880FF] rounded-r-sm rounded-b-sm rounded-bl-none"></div>
                        <div className={`w-[192px] h-[50px] flex p-[16px] items-center ${isExpanded ? "gap-[16px] group-hover:bg-[#4880FF] group-hover:text-white" : "group-hover:text-[#4880FF] text-[#979797]"}  rounded-sm`}>
                            <Globe />
                            <a href="#" className={`transition-all ease-in-out delay-50 font-semibold ${isExpanded ? "block" : "hidden"}`}>Browse</a>
                        </div>
                    </div>
                    <div className={`w-full flex group ${isExpanded ? "gap-[20px]" : "gap-[10px]"}`}>
                        <div className="w-[9px] h-[50px] bg-white group-hover:bg-[#4880FF] rounded-r-sm rounded-b-sm rounded-bl-none"></div>
                        <div className={`w-[192px] h-[50px] flex p-[16px] items-center ${isExpanded ? "gap-[16px] group-hover:bg-[#4880FF] group-hover:text-white" : "group-hover:text-[#4880FF] text-[#979797]"}  rounded-sm`}>
                            <NotebookPen />
                            <a href="#" className={`transition-all ease-in-out delay-50 font-semibold ${isExpanded ? "block" : "hidden"}`}>Write</a>
                        </div>
                    </div>
                    <div className={`w-full flex group ${isExpanded ? "gap-[20px]" : "gap-[10px]"}`}>
                        <div className="w-[9px] h-[50px] bg-white group-hover:bg-[#4880FF] rounded-r-sm rounded-b-sm rounded-bl-none"></div>
                        <div className={`w-[192px] h-[50px] flex p-[16px] items-center ${isExpanded ? "gap-[16px] group-hover:bg-[#4880FF] group-hover:text-white" : "group-hover:text-[#4880FF] text-[#979797]"}  rounded-sm`}>
                            <CircleQuestionMark />
                            <a href="#" className={`transition-all ease-in-out delay-50 font-semibold ${isExpanded ? "block" : "hidden"}`}>About</a>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;