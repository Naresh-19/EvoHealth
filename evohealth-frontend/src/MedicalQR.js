import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MedicalQR = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/user/medicalQR', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setQrCodeUrl(response.data.qrCodeUrl);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching QR code:', error);
        setLoading(false);
      }
    };

    fetchQRCode();
  }, []);

  return (
    <div>
      <h2>Medical QR Code</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={qrCodeUrl} alt="Medical QR Code" />
          <p>Scan this QR code for your medical information.</p>
        </div>
      )}
    </div>
  );
};

export default MedicalQR;
