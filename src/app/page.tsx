'use client';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import BudgetModal from '@/components/BudgetModal';
import CalendarDrawer from '@/components/CalenderModal';
import Navbar from '@/components/Navbar';
import Showcase from '@/components/Showcase';
import Overview from '@/components/Overview';
import SalesOverview from '@/components/SalesOverview';

const Dashboard = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar
        setIsBudgetModalOpen={setIsBudgetModalOpen}
        setIsCalendarOpen={setIsCalendarOpen}
      />

      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Welcome, Ahmed
        </h1>
        <div className="flex gap-8 items-stretch">
          {' '}
          {/* Add items-stretch here */}
          {/* Sales Overview */}
          <div className="flex-1">
            <SalesOverview />
          </div>
          {/* Right Sidebar */}
          <div className="w-[407px]">
            <Overview />
          </div>
        </div>
        {/* Property Cards */}
        <Showcase />
      </div>
      {isCalendarOpen && (
        <CalendarDrawer
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
        />
      )}

      {isBudgetModalOpen && (
        <BudgetModal
          isBudgetModalOpen={isBudgetModalOpen}
          setIsBudgetModalOpen={setIsBudgetModalOpen}
        />
      )}
    </div>
  );
};

export default Dashboard;
