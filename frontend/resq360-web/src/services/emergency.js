import { firestore } from './firebase';

// Function to fetch emergency numbers from Firestore
export const getEmergencyNumbers = async () => {
  try {
    const snapshot = await firestore.collection('emergency_numbers').get();
    const emergencyNumbers = snapshot.docs.map(doc => doc.data());
    localStorage.setItem('emergencyNumbers', JSON.stringify(emergencyNumbers));
    return emergencyNumbers;
  } catch (error) {
    console.error("Error fetching emergency numbers: ", error);
    return JSON.parse(localStorage.getItem('emergencyNumbers')) || [];
  }
};