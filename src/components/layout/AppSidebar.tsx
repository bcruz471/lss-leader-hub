import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, FileCheck, FolderOpen } from 'lucide-react';

export const AppSidebar = () => {
  return (
    <div className="h-screen fixed left-0 top-0 w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-4 flex justify-center items-center">
        <img 
          src="/public/logo.png"
          alt="Think Together Logo" 
          className="w-full max-w-[200px]" 
        />
      </div>
      
      {/* Navigation */}
      <nav className="mt-2 flex-1">
        <ul className="space-y-1">
          <li>
            <Link 
              to="/" 
              className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-100 hover:text-lss-navy font-medium"
            >
              <Home className="mr-3 h-5 w-5" />
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/courses" 
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-lss-navy"
            >
              <BookOpen className="mr-3 h-5 w-5" />
              Courses
            </Link>
          </li>
          <li>
            <Link 
              to="/assessments" 
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-lss-navy"
            >
              <FileCheck className="mr-3 h-5 w-5" />
              Performance Assessment
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-lss-navy"
            >
              <FolderOpen className="mr-3 h-5 w-5" />
              Digital Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 text-xs text-gray-500 border-t border-gray-200">
        © 2025 Think Together - LSS Program
      </div>
    </div>
  );
};

export default AppSidebar;
