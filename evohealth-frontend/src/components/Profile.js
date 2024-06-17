import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/profile');
        setProfileData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserProfile();
  }, []);

  if (error) {
    return <div>Error fetching user profile: {error}</div>;
  }

  if (!profileData) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {profileData.username}</p>
      <p>Email: {profileData.email}</p>
      {/* Display other profile information */}
    </div>
  );
};

export default Profile;
