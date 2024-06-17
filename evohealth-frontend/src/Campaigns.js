import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/campaigns');
        setCampaigns(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Campaigns</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {campaigns.map(campaign => (
            <li key={campaign._id}>
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              {/* Display donation button and other campaign details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Campaigns;
