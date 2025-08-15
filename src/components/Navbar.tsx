import Calculator from '@/icons/Calculator';
import CalenderIcon from '@/icons/CalenderIcon';
import MessageIcon from '@/icons/MessageIcon';
import NotificationIcon from '@/icons/NotificationIcon';
import React from 'react';

const Navbar = ({
  setIsBudgetModalOpen,
  setIsCalendarOpen,
}: {
  setIsBudgetModalOpen: (state: boolean) => void;
  setIsCalendarOpen: (state: boolean) => void;
}) => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <img src="/logo.png" alt="logo" width={153} height={26} />
        </div>

        <div className="flex items-center space-x-[25px]">
          <NotificationIcon />

          {/* Budgeting Icon */}
          <div
            className="relative group cursor-pointer"
            onClick={() => setIsBudgetModalOpen(true)}
          >
            <Calculator />
            <span
              className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 
              text-xs text-white bg-black rounded shadow-lg opacity-0 
              group-hover:opacity-100 transition-opacity duration-200"
            >
              Budgeting
            </span>
          </div>

          {/* Calendar Icon */}
          <div
            className="relative group cursor-pointer"
            onClick={() => setIsCalendarOpen(true)}
          >
            <CalenderIcon />
            <span
              className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 
              text-xs text-white bg-black rounded shadow-lg opacity-0 
              group-hover:opacity-100 transition-opacity duration-200"
            >
              Calendar
            </span>
          </div>

          <MessageIcon />
          <img src="/Profile.png" width={40} height={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
