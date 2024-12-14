import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Charts from './Charts';
import CardSection from './CardSection';

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='test-bg overflow-hidden'>
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-[74vh] w-64 bg-blue-600 text-white p-4 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:relative md:translate-x-0`}
        >
          {/* Close Button (Visible on Mobile/Tablet) */}
          <button
            className="block md:hidden mb-4 text-xl"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
          <h2 className="text-xl font-bold mb-6">Sidebar</h2>
          <ul className="space-y-4">
            <li className="hover:bg-blue-500 p-2 rounded">
              <a href="#content1">Content 1</a>
            </li>
            <li className="hover:bg-blue-500 p-2 rounded">
              <a href="#content2">Content 2</a>
            </li>
            <li className="hover:bg-blue-500 p-2 rounded">
              <a href="#content3">Content 3</a>
            </li>
            <li className="hover:bg-blue-500 p-2 rounded">
              <a href="#content4">Content 4</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Hamburger Button (Visible on Mobile/Tablet) */}
          <button
            className="block md:hidden mb-4 text-xl"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>

          <Charts />
        </div>

      </div>

      <div className='container'>
        <div className='flex gap-[20px]'>
          <button className="border border-white px-4 py-2 rounded-full font-semibold text-white">
            # Boosting
          </button>
          <button className="border border-white px-4 py-2 rounded-full font-semibold text-white">
            # Startups
          </button>
        </div>
        <div>
          <h1 className='text-[40px] text-[white]'>Ignite your startup potential</h1>
          <h1 className='text-[white] text-[40px]'>With <span className='text-[15px] px-[15px] py-[5px] btn-color border border-white rounded-full text-white'>Progress Instruments</span> booster</h1>
        </div>

        <div className='flex justify-center'>
          <CardSection/>
        </div>

      </div>
    </div>
  );
};

export default Home;
