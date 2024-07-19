import React from 'react';

function Content() {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card Title 1</h2>
          <p>Some content for the card.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
          <p>Some content for the card.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card Title 3</h2>
          <p>Some content for the card.</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </main>
  );
}

export default Content;
