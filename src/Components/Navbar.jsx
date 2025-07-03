import React, { useState } from "react";
import { Search, ChevronDown } from 'lucide-react';
import profile from '../assets/userprofile.jpg'

function Navbar(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav className="bg-[#FFFFFF] w-full min-w-[70%] p-[16px] flex justify-between">
                <div className="bg-[#F5F6FA] p-[6px] w-[378px] rounded-[60px] flex items-center">
                    <input type="text" placeholder="Search Library" className="bg-transparent w-full p-[4px] focus:outline-none focus:ring-0 border-none rounded-[60px]"/>
                    <button className="p-[5px]"><Search /></button>
                </div>
                <div className="flex gap-[20px] items-center relative">
                    <img src={profile} alt="Profile" className="w-[50px] h-[50px] rounded-full"/>
                    <div className="flex flex-col">
                        <span className="text-[14px]">John Doe</span>
                        <span className="text-[12px]">User</span>
                    </div>
                    <button 
                        onClick={toggleDropdown}
                        className="rounded-full w-[18px] h-[18px] border flex justify-center items-center hover:bg-gray-100 transition-colors"
                    >
                        <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Fixed Dropdown */}
                    {isDropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-[120px] z-50">
                            <ul className="py-1">
                                <li>
                                    <button className="hover:bg-[#4880FF] hover:text-white p-[8px] w-full text-left transition-colors">
                                        Profile
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:bg-[#4880FF] hover:text-white p-[8px] w-full text-left transition-colors">
                                        Settings
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:bg-[#4880FF] hover:text-white p-[8px] w-full text-left transition-colors">
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar