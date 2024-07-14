import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    website: 'https://johndoe.com',
    businessHours: '9 AM - 5 PM',
    category: 'Consulting',
    image: 'https://via.placeholder.com/150',
    address: '123 Main St, Anytown, USA',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (formData) => {
    setUserData(formData);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      {isEditing ? (
        <RegistrationForm initialData={userData} onSave={handleSave} />
      ) : (
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Dashboard</h2>
          <div className="flex flex-col items-center">
            <img
              src={userData.image}
              alt="User"
              className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{userData.name}</h3>
            <p className="text-lg text-gray-600 mb-1"><strong>Email:</strong> {userData.email}</p>
            <p className="text-lg text-gray-600 mb-1"><strong>Phone:</strong> {userData.phone}</p>
            <p className="text-lg text-gray-600 mb-1"><strong>Website:</strong> <a href={userData.website} className="text-blue-500 hover:underline">{userData.website}</a></p>
            <p className="text-lg text-gray-600 mb-1"><strong>Business Hours:</strong> {userData.businessHours}</p>
            <p className="text-lg text-gray-600 mb-1"><strong>Category:</strong> {userData.category}</p>
            <p className="text-lg text-gray-600 mb-1"><strong>Address:</strong> {userData.address}</p>
            <div className="mt-8">
              <button
                onClick={handleEdit}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
