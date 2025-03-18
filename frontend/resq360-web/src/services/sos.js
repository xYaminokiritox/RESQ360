import { functions } from './firebase';
import { httpsCallable } from 'firebase/functions';

// Function to send SOS alert using Firebase Cloud Functions
export const sendSOS = async (message) => {
  try {
    const sendAlert = httpsCallable(functions, 'sendSOSAlert');
    const response = await sendAlert({ message });
    return response.data;
  } catch (error) {
    console.error("Error sending SOS alert: ", error);
  }
};