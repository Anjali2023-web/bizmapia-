import React from 'react';
import TopLists from './TopLists';

function ActiveListings() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Active Listings</h2>
      <TopLists/>
    </div>
  );
}

export default ActiveListings;