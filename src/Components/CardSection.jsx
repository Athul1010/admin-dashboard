import React from 'react';
import image4 from '../assets/image-4.jpg';
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const CardSection = () => {
    return (
        <div className='mt-4 mb-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {/* First Card */}
            <div className='w-full'>
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 w-full">
                    <div className="flex flex-col justify-between p-6 sm:p-8 leading-normal">
                        <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            In Search of a promising startup's future
                        </h5>
                        <div className='flex gap-4 sm:gap-8 items-center'>
                            <h4 className='text-3xl sm:text-4xl'>0<span className='text-lg sm:text-xl'>%</span></h4>
                            <div className='flex flex-col pt-2'>
                                <span className='text-sm sm:text-base'>Enjoy progress</span>
                                <input type="range" className='w-full' />
                            </div>
                            <h4 className='text-3xl sm:text-4xl'>100<span className='text-lg sm:text-xl'>%</span></h4>
                        </div>
                    </div>
                </a>
            </div>

            {/* Second Card */}
            <div className='w-full'>
                <a href="#" className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 w-full">
                    <img className="object-cover w-full sm:w-48 rounded-t-lg sm:rounded-none sm:rounded-s-lg h-[180px] p-2" src={image4} alt="Card Image" />
                    <div className="flex flex-col justify-between p-4 sm:p-6 leading-normal">
                        <p className="mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far
                        </p>
                        <div className='flex gap-4'>
                            <button className='hover:bg-blue-500 hover:text-white border border-black px-4 py-2 rounded-full text-sm sm:text-base font-semibold text-black'>Go</button>
                            <button className='hover:bg-blue-500 hover:text-white border border-black px-4 py-2 rounded-full text-sm sm:text-base font-semibold text-black'>Request</button>
                        </div>
                    </div>
                </a>
                {/* Social Media */}
                <div className='mt-3 bg-white rounded-full border border-black flex justify-between items-center px-6 py-2'>
                    <h4 className='text-sm sm:text-base'>Our Social Media</h4>
                    <div className='flex gap-4'>
                        <div className='transition-transform transform hover:scale-110 cursor-pointer'>
                            <AiFillInstagram size={20} className='text-gray-600 hover:text-pink-500' />
                        </div>
                        <div className='transition-transform transform hover:scale-110 cursor-pointer'>
                            <FaTwitter size={20} className='text-gray-600 hover:text-blue-500' />
                        </div>
                        <div className='transition-transform transform hover:scale-110 cursor-pointer'>
                            <FaLinkedin size={20} className='text-gray-600 hover:text-blue-700' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Card */}
            <div className='w-full'>
                <a href="#" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 w-full">
                    <div className="flex flex-col justify-between p-4 sm:p-6 leading-normal">
                        <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology
                        </p>
                        <div className='flex gap-4'>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2" placeholder="name@company.com" />
                            <button className='hover:bg-blue-500 hover:text-white border border-black px-4 py-2 rounded-full text-sm font-semibold text-black'>Send</button>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    );
};

export default CardSection;
