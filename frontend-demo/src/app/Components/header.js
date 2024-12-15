"use client";
import { useEffect, useState } from 'react';

export default function header() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Không render gì trên server
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-3 bg-white border-b">
            <div className="flex items-center space-x-3">
                <button className="group relative inline-block overflow-hidden bg-gray-200 text-sm text-gray-800 font-normal py-2 px-4 rounded-md hover:text-white hover-bg-change h-10">
                    <span className="effect-hover-header"></span>
                    <span className="relative">Active Plans</span>
                </button>
                <button className="group relative inline-block overflow-hidden bg-[#2b193f] text-sm text-white font-normal py-2 px-4 rounded-md hover-bg-change h-10">
                    <span className="effect-hover-header"></span>
                    <span className="relative">Upgrade</span>
                </button>
            </div>
            <div className="flex flex-wrap space-x-2 justify-center">
                <div className="relative size-14">
                    <svg className="size-14 -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-200" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-black dark:text-black-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="80" strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center space-y-1">
                        <span className="text-center text-xxxs font-light text-[#2b193f]">Words</span>
                        <span className="text-center text-xs font-bold text-[#2b193f]">97282</span>
                    </div>
                </div>
                <div className="relative size-14">
                    <svg className="size-14 -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-200" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-yellow dark:text-yellow-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="80" strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center space-y-1">
                        <span className="text-center text-xxxs font-light text-[#2b193f]">Images</span>
                        <span className="text-center text-xs font-bold text-[#2b193f]">5667</span>
                    </div>
                </div>
                <div className="relative size-14">
                    <svg className="size-14 -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-200" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-red dark:text-red-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="80" strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center space-y-1">
                        <span className="text-center text-xxxs font-light text-[#2b193f]">Codes</span>
                        <span className="text-center text-xs font-bold text-[#2b193f]">51235</span>
                    </div>
                </div>
                <div className="relative size-14">
                    <svg className="size-14 -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-200" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue dark:text-blue-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="80" strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center space-y-1">
                        <span className="text-center text-xxxs font-light text-[#2b193f]">Chats</span>
                        <span className="text-center text-xs font-bold text-[#2b193f]">9762</span>
                    </div>
                </div>
                <div className="relative size-14">
                    <svg className="size-14 -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-200" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green dark:text-green-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="80" strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center space-y-1">
                        <span className="text-center text-xxxs font-light text-[#2b193f]">Audio</span>
                        <span className="text-center text-xs font-bold text-[#2b193f]">15123</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <ul className="flex flex-wrap space-x-4">
                    <li>
                        <a href="#" className="btn-icon-header">
                            <i className="fa fa-globe text-lg sm:text-xl" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn-icon-header">
                            <i className="fa fa-search text-lg sm:text-xl" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn-icon-header">
                            <i className="fa-solid fa-expand text-lg sm:text-xl"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn-icon-header">
                            <i className="fa-solid fa-money-bill text-lg sm:text-xl"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn-icon-header">
                            <i className="fa-solid fa-language text-lg sm:text-xl"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn-icon-header">
                            <i className="fa-solid fa-sun text-lg sm:text-xl"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn-icon-header">
                            <i className="fa-regular fa-user text-lg sm:text-xl"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}