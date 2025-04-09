
import React from 'react';
import AppSidebar from './AppSidebar';
import Header from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AppSidebar />
      
      <div className="flex-1 ml-64">
        <Header title={title} userName="John Doe" />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
