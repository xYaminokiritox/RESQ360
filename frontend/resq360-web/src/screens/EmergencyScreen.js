import React, { useEffect, useState } from 'react';
import { getEmergencyNumbers } from '../services/emergency';
import Map from '../components/Map';

const EmergencyScreen = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const fetchNumbers = async () => {
      const data = await getEmergencyNumbers();
      setNumbers(data);
    };

    fetchNumbers();
  }, []);

  return (
    <div>
      <h1>Emergency Screen</h1>
      <Map />
      <h2>Emergency Numbers</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number.name}: {number.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyScreen;