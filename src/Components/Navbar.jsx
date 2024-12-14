import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.png';
import Textbar from '../Components/Textbar.jsx'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='container'>
      <div className="relative">
        {/* Navbar */}
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} className="h-14" alt="Logo" />
            {/* <Textbar/> */}
          </div>
          <div className="flex justify-center items-center gap-[15px]">
            <div className="md:flex justify-center items-center gap-[15px] hidden md:block">
              <span>Home</span>
              <span>About</span>
              <span>Blogs</span>
              <span>Best Places</span>
            </div>
            <div>
              <span onClick={toggleSidebar} className="cursor-pointer md:hidden sm:block">
                <GiHamburgerMenu className="text-[25px]" />
              </span>
            </div>
          </div>
        </div>
  
        {/* Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${ isSidebarOpen ? 'translate-x-0' : 'translate-x-full' } transition-transform duration-300 ease-in-out`}>
          <div className="p-4 flex justify-end">
            <button onClick={toggleSidebar} className="text-2xl">✕</button>
          </div>
          <nav className="flex flex-col items-start p-4">
            <a href="#" className="mb-4">Home</a>
            <a href="#" className="mb-4">About</a>
            <a href="#" className="mb-4">Blogs</a>
            <a href="#" className="mb-4">Best Places</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>


//       <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
//             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//           </a>
//           <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
//             <span class="sr-only">Open main menu</span>
//             <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//             </svg>
//           </button>
//           <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
//             <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
//               </li>
//               <li>
//                 <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
//                 </svg></button>
                
//                 <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//                   <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
//                     <li>
//                       <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//                     </li>
//                     <li>
//                       <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//                     </li>
//                     <li>
//                       <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//                     </li>
//                   </ul>
//                   <div class="py-1">
//                     <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
//               </li>
//               <li>
//                 <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
//               </li>
//               <li>
//                 <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//     </div>
//   )
// }

// export default Navbar

