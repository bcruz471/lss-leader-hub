
import React from 'react';
import AppLayout from '../components/layout/AppLayout';

const Assessments = () => {
  return (
    <AppLayout title="Assessments">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Performance Assessments</h2>
          <p className="text-gray-600">This section will display your current and past assessments.</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Assessments;
