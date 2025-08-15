import HomeListingIcon from '@/icons/HomeListingIcon';
import UserListingIcon from '@/icons/UserListingIcon';
import { ChevronRight } from 'lucide-react';

const Overview = () => {
  const overviewData = [
    {
      title: 'Listings Overview',
      icon: <HomeListingIcon />,
      bgHeader: 'bg-[#F9FAFB]',
      stats: [
        { label: 'Total', value: '1.8k' },
        { label: 'Active', value: '80' },
        { label: 'Archived', value: '1k' },
      ],
    },
    {
      title: 'Users Overview',
      icon: <UserListingIcon />,
      bgHeader: 'bg-[#F9FAFB]',
      stats: [
        { label: 'Total', value: '20.7k' },
        { label: 'Riders', value: '8.5k' },
        { label: 'Subscribers', value: '7.5k' },
      ],
    },
  ];

  return (
    <div className="space-y-6 w-[407px]">
      {overviewData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between border-b-[0.5px] p-4 ${
              card.bgHeader || ''
            }`}
          >
            <h3 className="text-sm font-semibold text-gray-800 flex items-center">
              {card.icon}
              <p className="ml-[10px]">{card.title}</p>
            </h3>
            <button className="text-[#4545FE] text-sm font-medium hover:text-blue-700 flex items-center">
              View all <ChevronRight color="#4545FE" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center px-4 py-[26px]">
            {card.stats.map((stat, statIndex) => (
              <div key={statIndex}>
                <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                <div className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
