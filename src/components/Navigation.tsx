import HomeIcon from '@/icons/HomeIcon';
import ListingIcon from '@/icons/ListingIcon';
import RequestIcon from '@/icons/RequestIcon';
import SearchIcon from '@/icons/SearchIcon';
import SettingsIcon from '@/icons/SettingsIcon';
import UsersIcon from '@/icons/UsersIcon';
import { Settings } from 'lucide-react';

const Navigation: React.FC = () => (
  <nav className="bg-white border-b px-6 py-3 ">
    <div className="flex items-center space-x-8 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2 text-gray-900 font-medium bg-[#F5F5F5] rounded-lg py-[7px] px-[25px]">
        <HomeIcon />
        <span>Dashboard</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 cursor-pointer">
        <ListingIcon />
        <span>Listings</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 cursor-pointer">
        <UsersIcon />
        <span>Users</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 cursor-pointer">
        <SettingsIcon />

        <span>Request</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 cursor-pointer">
        <RequestIcon />
        <span>Applications</span>
      </div>
      <div className="ml-auto">
        <div className="w-[319px] bg-[#F5F5F5] relative pl-2 pr-8 py-2 border border-gray-300 rounded-lg  flex items-center justify-start">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search listings, users here..."
            className=" w-full pl-3 text-sm focus:outline-none  text-[#919191]"
          />
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
