import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

const CalendarDrawer = ({
  isCalendarOpen,
  setIsCalendarOpen,
}: {
  isCalendarOpen: boolean;
  setIsCalendarOpen: (state: boolean) => void;
}) => {
  const [selectedDate, setSelectedDate] = useState(16);
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isCalendarOpen ? 'visible' : 'invisible'
      }`}
    >
      <div
        className={`absolute inset-0 bg-transparent transition-opacity duration-300 ${
          isCalendarOpen ? 'bg-opacity-50' : 'bg-opacity-0'
        }`}
        onClick={() => setIsCalendarOpen(false)}
      />
      <div
        className={`absolute right-0 top-0 h-full w-96 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isCalendarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center">
            <ChevronLeft
              className="w-6 h-6 text-white mr-4 cursor-pointer"
              onClick={() => setIsCalendarOpen(false)}
            />
            <h2 className="text-white text-xl font-semibold">Calendar</h2>
          </div>
          <X
            className="w-6 h-6 text-white cursor-pointer"
            onClick={() => setIsCalendarOpen(false)}
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <ChevronLeft className="w-6 h-6 text-gray-400 cursor-pointer" />
            <h3 className="text-white text-lg font-medium">November 2023</h3>
            <ChevronRight className="w-6 h-6 text-gray-400 cursor-pointer" />
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'].map((day) => (
              <div
                key={day}
                className="text-gray-500 text-xs text-center py-2 font-medium"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {[
              29,
              30,
              31,
              'Nov 1',
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              'DEC 1',
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
            ].map((date, index) => (
              <div
                key={index}
                className={`h-12 flex items-center justify-center text-sm cursor-pointer rounded-lg transition-colors
                  ${
                    date === selectedDate
                      ? 'bg-blue-600 text-white'
                      : typeof date === 'string'
                      ? 'text-gray-500'
                      : 'text-gray-300 hover:bg-gray-800'
                  }
                `}
                onClick={() =>
                  typeof date === 'number' && setSelectedDate(date)
                }
              >
                {date}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarDrawer;
