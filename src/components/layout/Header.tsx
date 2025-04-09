
import React from 'react';
import { Bell, Search, User } from 'lucide-react';

interface HeaderProps {
  title: string;
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, userName = "User" }) => {
  return (
    <div className="bg-lss-navy text-white py-4 px-6 flex justify-between items-center shadow-sm">
      <h1 className="text-2xl font-bold">{title}</h1>
      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <Search className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 ml-2">
          <div className="h-8 w-8 bg-lss-orange rounded-full flex items-center justify-center">
            <User className="h-5 w-5" />
          </div>
          <span>{userName}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
