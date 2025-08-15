import React, { useState } from 'react';

const salesData = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 25 },
  { month: 'Mar', value: 35 },
  { month: 'Apr', value: 15 },
  { month: 'May', value: 45 },
  { month: 'Jun', value: 40 },
  { month: 'Jul', value: 35 },
  // { month: 'Aug', value: 30 },
  // { month: 'Sep', value: 35 },
];

const SalesOverview = () => {
  const [currentView, setCurrentView] = useState('1 Month');

  return (
    <div className="w-full bg-white rounded-2xl p-4 md:p-6 shadow-sm overflow-hidden">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        {/* Left side - Title and description */}
        <div>
          <h2 className="text-[20px] font-semibold text-gray-900">
            Sales Overview
          </h2>
          <p className="text-sm text-gray-500">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>

        {/* Right side - Button and tabs */}
        <div className="flex flex-col items-end">
          {/* View Transactions button aligned with description */}
          <button className="border border-gray-300 text-xs font-medium rounded-[72px] px-[37px] py-[15px] text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap mb-2">
            View Transactions
          </button>

          {/* Duration tabs */}
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentView('1 Week')}
              className={`py-[7px] px-[25px] rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                currentView === '1 Week'
                  ? 'text-gray-900 font-semibold bg-[#F5F5F5]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              1 Week
            </button>
            <button
              onClick={() => setCurrentView('1 Month')}
              className={`py-[7px] px-[25px] rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                currentView === '1 Month'
                  ? 'text-gray-900 font-semibold bg-[#F5F5F5]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              1 Month
            </button>
            <button
              onClick={() => setCurrentView('1 Year')}
              className={`py-[7px] px-[25px] rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                currentView === '1 Year'
                  ? 'text-gray-900 font-semibold bg-[#F5F5F5]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              1 Year
            </button>
          </div>
        </div>
      </div>

      {/* Chart and Analytics - Always Side by Side */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Previous Icon */}
        <button className="w-6 h-6 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0">
          <svg
            className="w-3 h-3 md:w-4 md:h-4 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Chart Section - Height reduced to 148px */}
        <div className="flex-1 min-w-0">
          <div className="relative h-[148px]">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-2">
              <span>50m</span>
              <span>40m</span>
              <span>30m</span>
              <span>20m</span>
              <span>10m</span>
              <span>0</span>
            </div>
            <div className="ml-6 md:ml-8 h-full flex items-end justify-between px-1">
              {salesData.map((data) => (
                <div
                  key={data.month}
                  className="flex flex-col items-center flex-1 max-w-8 md:max-w-12"
                >
                  <div className="flex space-x-0.5 mb-2 items-end justify-center">
                    <div
                      className="w-1.5 md:w-3 bg-blue-500 rounded-sm"
                      style={{ height: `${Math.max(data.value * 1.8, 6)}px` }}
                    />
                    <div
                      className="w-1.5 md:w-3 bg-green-500 rounded-sm"
                      style={{
                        height: `${Math.max(data.value * 0.8 * 1.8, 4)}px`,
                      }}
                    />
                    <div
                      className="w-1.5 md:w-3 bg-red-500 rounded-sm"
                      style={{
                        height: `${Math.max(data.value * 0.6 * 1.8, 3)}px`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1 truncate">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next and Play Icons */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          {/* Next Icon */}
          <button className="w-6 h-6 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Play Icon */}
          {/* <button className="w-6 h-6 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-gray-600 ml-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button> */}
        </div>

        {/* Analytics Section - 2x2 Grid */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {/* Top Left */}
            <div className="border border-gray-200 rounded-lg p-2 md:p-4 min-w-0">
              <div className="text-sm md:text-2xl font-bold text-blue-600 truncate">
                ₦120,000,000
              </div>
              <div className="flex text-xs md:text-sm mt-1">
                <span className="text-gray-600 truncate">Total Inflow</span>
                <span className="text-green-600 flex items-center">
                  <svg
                    className="w-2 h-2 md:w-3 md:h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2.5%
                </span>
              </div>
            </div>

            {/* Top Right */}
            <div className="border border-gray-200 rounded-lg p-2 md:p-4 min-w-0">
              <div className="text-sm md:text-2xl font-bold text-green-600 truncate">
                ₦50,000,000
              </div>
              <div className="flex text-xs md:text-sm mt-1">
                <span className="text-gray-600 truncate">MRR</span>
                <span className="text-green-600 flex items-center">
                  <svg
                    className="w-2 h-2 md:w-3 md:h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2.5%
                </span>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="border border-gray-200 rounded-lg p-2 md:p-4 min-w-0">
              <div className="text-sm md:text-2xl font-bold text-teal-600 truncate">
                ₦200,000,000
              </div>
              <div className="flex  text-xs md:text-sm mt-1">
                <span className="text-gray-600 truncate">
                  Commission Revenue
                </span>
                <span className="text-green-600 flex items-center">
                  <svg
                    className="w-2 h-2 md:w-3 md:h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  0.5%
                </span>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="border border-gray-200 rounded-lg p-2 md:p-4 min-w-0">
              <div className="text-sm md:text-2xl font-bold text-red-500 truncate">
                ₦100,000,000
              </div>
              <div className="flex text-xs md:text-sm mt-1">
                <span className="text-gray-600 truncate">GMV</span>
                <span className="text-red-500 flex items-center">
                  <svg
                    className="w-2 h-2 md:w-3 md:h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  0.5%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
