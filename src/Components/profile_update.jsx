import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled-components for the form
const FormWrapper = styled.form`
  max-width: 64rem;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CoverPhotoWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 12rem;
  width: 100%;
  background-color: #e2e8f0;
  background-image: url(${(props) => props.coverPhoto});
  background-size: cover;
  background-position: center;
  border-radius: 0.375rem;
`;

const CoverPhotoInput = styled.input`
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const CoverUploadButton = styled.label`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

const CoverDeleteButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ef4444;
  color: #ffffff;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dc2626;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative; /* Position relative for button positioning */
`;

const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #e2e8f0;
`;

const FileInput = styled.input`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const UploadButton = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(50%, 50%);
  width: 2rem;
  height: 2rem;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #ef4444;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  line-height: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dc2626;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  resize: vertical;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 0.375rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #2563eb;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.cols ? `repeat(${props.cols}, minmax(0, 1fr))` : '1fr')};
  gap: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const SubHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

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
    },
    profilePicture: '',
    coverPhoto: '' // New state for cover photo
  });

  useEffect(() => {
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

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePicture', file);

      try {
        const response = await axios.post('https://popzup.in/user/upload-profile-picture', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setProfile(prevProfile => ({
          ...prevProfile,
          profilePicture: response.data.url
        }));
      } catch (error) {
        console.error('Failed to upload profile picture', error);
      }
    }
  };

  const handleCoverPhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('coverPhoto', file);

      try {
        const response = await axios.post('https://popzup.in/user/upload-cover-photo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setProfile(prevProfile => ({
          ...prevProfile,
          coverPhoto: response.data.url
        }));
      } catch (error) {
        console.error('Failed to upload cover photo', error);
      }
    }
  };

  const handleDeleteCoverPhoto = async () => {
    try {
      await axios.post('https://popzup.in/user/delete-cover-photo');
      setProfile(prevProfile => ({
        ...prevProfile,
        coverPhoto: ''
      }));
    } catch (error) {
      console.error('Failed to delete cover photo', error);
    }
  };

  const handleDeleteProfilePicture = async () => {
    try {
      await axios.post('https://popzup.in/user/delete-profile-picture');
      setProfile(prevProfile => ({
        ...prevProfile,
        profilePicture: ''
      }));
    } catch (error) {
      console.error('Failed to delete profile picture', error);
    }
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
    <FormWrapper onSubmit={handleSubmit}>
      <CoverPhotoWrapper coverPhoto={profile.coverPhoto || 'default-cover.jpg'}>
        <CoverPhotoInput
          type="file"
          id="cover-photo-upload"
          accept="image/*"
          onChange={handleCoverPhotoChange}
        />
        <CoverUploadButton htmlFor="cover-photo-upload">
          Change Cover
        </CoverUploadButton>
        {profile.coverPhoto && (
          <CoverDeleteButton
            type="button"
            onClick={handleDeleteCoverPhoto}
          >
            Delete Cover
          </CoverDeleteButton>
        )}
      </CoverPhotoWrapper>

      <ProfileImageWrapper>
        <ProfileImage
          src={profile.profilePicture || 'default-profile.png'}
          alt="Profile"
        />
        <FileInput
          type="file"
          id="profile-picture-upload"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />
        <UploadButton htmlFor="profile-picture-upload">
          +
        </UploadButton>
        {profile.profilePicture && (
          <DeleteButton
            type="button"
            onClick={handleDeleteProfilePicture}
          >
            <i className="fas fa-trash"></i>
          </DeleteButton>
        )}
      </ProfileImageWrapper>

      <Heading>Update Profile</Heading>

      <Grid cols={2}>
        <div>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstname"
            value={profile.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastname"
            value={profile.lastname}
            onChange={handleChange}
          />
        </div>
      </Grid>

      <div style={{ marginTop: '1rem' }}>
        <Label>Phone Number</Label>
        <Input
          type="tel"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Label>Business Name</Label>
        <Input
          type="text"
          name="businessName"
          value={profile.businessName}
          onChange={handleChange}
        />
      </div>

      <SubHeading>Address</SubHeading>
      <Grid cols={2}>
        <div>
          <Label>Building Name</Label>
          <Input
            type="text"
            name="buildingName"
            value={profile.address.buildingName}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <Label>Street</Label>
          <Input
            type="text"
            name="street"
            value={profile.address.street}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <Label>City</Label>
          <Input
            type="text"
            name="city"
            value={profile.address.city}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <Label>State</Label>
          <Input
            type="text"
            name="state"
            value={profile.address.state}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <Label>Country</Label>
          <Input
            type="text"
            name="country"
            value={profile.address.country}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <Label>Postal Code</Label>
          <Input
            type="text"
            name="postalCode"
            value={profile.address.postalCode}
            onChange={handleAddressChange}
          />
        </div>
      </Grid>

      <div style={{ marginTop: '1rem' }}>
        <Label>Business Description</Label>
        <Textarea
          name="businessDescription"
          value={profile.businessDescription}
          onChange={handleChange}
          rows="4"
        />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Label>Website</Label>
        <Input
          type="url"
          name="website"
          value={profile.website}
          onChange={handleChange}
        />
      </div>

      <SubHeading>Business Working Hours</SubHeading>
      {profile.businessWorkingDaysandHours.map((day, index) => (
        <Grid key={day.day} cols={3} style={{ marginBottom: '1rem' }}>
          <div>{day.day}</div>
          <div>
            <Input
              type="time"
              value={day.openingTime}
              onChange={(e) => handleWorkingHoursChange(index, 'openingTime', e.target.value)}
            />
          </div>
          <div>
            <Input
              type="time"
              value={day.closingTime}
              onChange={(e) => handleWorkingHoursChange(index, 'closingTime', e.target.value)}
            />
          </div>
        </Grid>
      ))}

      <SubHeading>Social Media Links</SubHeading>
      <Grid cols={2}>
        <div>
          <Label>Facebook</Label>
          <Input
            type="url"
            name="facebook"
            value={profile.socialMediaLinks.facebook}
            onChange={handleSocialMediaChange}
          />
        </div>
        <div>
          <Label>Twitter</Label>
          <Input
            type="url"
            name="twitter"
            value={profile.socialMediaLinks.twitter}
            onChange={handleSocialMediaChange}
          />
        </div>
        <div>
          <Label>Instagram</Label>
          <Input
            type="url"
            name="instagram"
            value={profile.socialMediaLinks.instagram}
            onChange={handleSocialMediaChange}
          />
        </div>
      </Grid>

      <Button type="submit">Update Profile</Button>
    </FormWrapper>
  );
};

export default ProfileUpdateForm;
