import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileUpdateForm = () => {
  const [profile, setProfile] = useState({
    id: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    email: '',
    businessName: '',
    address: {
      buildingName: '',
      street: '',
      city: '',
      state: '',
      country: '',
      postalCode: ''
    },
    businessDescription: '',
    website: '',
    businessWorkingDaysandHours: [
      { day: 'Monday', openingTime: '', closingTime: '' },
      { day: 'Tuesday', openingTime: '', closingTime: '' },
      { day: 'Wednesday', openingTime: '', closingTime: '' },
      { day: 'Thursday', openingTime: '', closingTime: '' },
      { day: 'Friday', openingTime: '', closingTime: '' },
      { day: 'Saturday', openingTime: '', closingTime: '' },
      { day: 'Sunday', openingTime: '', closingTime: '' }
    ],
    socialMediaLinks: {
      facebook: '',
      twitter: '',
      instagram: ''
    }
  });

  useEffect(() => {
    // Fetch user profile data and set it to state
    // This is a placeholder. Replace with actual API call.
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://popzup.in/user/profile'); // replace with actual API URL
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      address: {
        ...prevProfile.address,
        [name]: value
      }
    }));
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      socialMediaLinks: {
        ...prevProfile.socialMediaLinks,
        [name]: value
      }
    }));
  };

  const handleWorkingHoursChange = (index, field, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      businessWorkingDaysandHours: prevProfile.businessWorkingDaysandHours.map((day, i) => 
        i === index ? { ...day, [field]: value } : day
      )
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://popzup.in/user/updateprofile',
        profile,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log('Profile updated successfully', response.data);
        alert('Profile updated successfully');
      } else {
        console.error('Profile update failed', response);
        alert('Profile update failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">First Name</label>
          <input
            type="text"
            name="firstname"
            value={profile.firstname}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={profile.lastname}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-2">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Business Name</label>
        <input
          type="text"
          name="businessName"
          value={profile.businessName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Address</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Building Name</label>
          <input
            type="text"
            name="buildingName"
            value={profile.address.buildingName}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Street</label>
          <input
            type="text"
            name="street"
            value={profile.address.street}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">City</label>
          <input
            type="text"
            name="city"
            value={profile.address.city}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">State</label>
          <input
            type="text"
            name="state"
            value={profile.address.state}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Country</label>
          <input
            type="text"
            name="country"
            value={profile.address.country}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={profile.address.postalCode}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-2">Business Description</label>
        <textarea
          name="businessDescription"
          value={profile.businessDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
        ></textarea>
      </div>

      <div className="mt-4">
        <label className="block mb-2">Website</label>
        <input
          type="url"
          name="website"
          value={profile.website}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Business Working Hours</h3>
      {profile.businessWorkingDaysandHours.map((day, index) => (
        <div key={day.day} className="grid grid-cols-3 gap-4 mb-4">
          <div>{day.day}</div>
          <div>
            <input
              type="time"
              value={day.openingTime}
              onChange={(e) => handleWorkingHoursChange(index, 'openingTime', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <input
              type="time"
              value={day.closingTime}
              onChange={(e) => handleWorkingHoursChange(index, 'closingTime', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      ))}

      <h3 className="text-xl font-semibold mt-6 mb-4">Social Media Links</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Facebook</label>
          <input
            type="url"
            name="facebook"
            value={profile.socialMediaLinks.facebook}
            onChange={handleSocialMediaChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Twitter</label>
          <input
            type="url"
            name="twitter"
            value={profile.socialMediaLinks.twitter}
            onChange={handleSocialMediaChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Instagram</label>
          <input
            type="url"
            name="instagram"
            value={profile.socialMediaLinks.instagram}
            onChange={handleSocialMediaChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <button type="submit" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Update Profile
      </button>
    </form>
  );
};

export default ProfileUpdateForm;
