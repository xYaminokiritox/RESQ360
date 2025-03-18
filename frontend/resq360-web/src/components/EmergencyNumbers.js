import React, { useEffect, useState } from 'react';
import { getEmergencyNumbers } from '../services/emergency';

const EmergencyNumbers = () => {
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
      <h1>Emergency Numbers</h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number.name}: {number.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyNumbers;