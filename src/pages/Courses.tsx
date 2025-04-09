
import React from 'react';
import AppLayout from '../components/layout/AppLayout';

const Courses = () => {
  return (
    <AppLayout title="Courses">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
          <p className="text-gray-600">This section will display your available courses and learning modules.</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Courses;
