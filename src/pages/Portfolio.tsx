
import React from 'react';
import AppLayout from '../components/layout/AppLayout';

const Portfolio = () => {
  return (
    <AppLayout title="Digital Portfolio">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Your Portfolio</h2>
          <p className="text-gray-600">This section will display your digital portfolio with artifacts and evidence of your leadership development.</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Portfolio;
