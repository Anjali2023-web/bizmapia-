import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Content() {
  // Data for the Lead Generation Graph
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Weekly data points (X-axis)
    datasets: [
      {
        label: 'Daily Leads',
        data: [120, 150, 180, 200, 160, 130, 170], // Example data for daily leads
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Weekly Leads',
        data: [800, 950, 1100, 1050, 900, 850, 1000], // Example data for weekly leads
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Monthly Leads',
        data: [3200, 3500, 4000, 3900, 3600, 3300, 4100], // Example data for monthly leads
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Calculate total leads for each dataset
  const dailyTotal = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
  const weeklyTotal = data.datasets[1].data.reduce((acc, val) => acc + val, 0);
  const monthlyTotal = data.datasets[2].data.reduce((acc, val) => acc + val, 0);

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Lead Generation Graph',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days of the Week',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Leads Count',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>

      {/* Lead Generation Graph */}
      <div className="bg-white p-6 rounded-lg shadow-md h-[28rem]"> {/* Updated height */}
        <h2 className="text-xl font-semibold mb-4">Profile Visits - Lead Generation</h2>
        <Line data={data} options={options} />
        
        {/* Display totals below the graph */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Lead Totals</h3>
          <div className="flex justify-between mt-2">
            <div className="flex-1 text-center">
              <p className="text-gray-600">Daily Leads</p>
              <p className="text-2xl font-bold">{dailyTotal}</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-gray-600">Weekly Leads</p>
              <p className="text-2xl font-bold">{weeklyTotal}</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-gray-600">Monthly Leads</p>
              <p className="text-2xl font-bold">{monthlyTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
