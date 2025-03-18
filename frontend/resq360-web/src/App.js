import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import EmergencyScreen from './screens/Emergencyscreen';
import ChatbotScreen from './screens/ChatbotScreen';
import SettingsScreen from './screens/SettingsScreen';
import EmergencyNumbers from './components/EmergencyNumbers';
import VoiceCommand from './components/VoiceCommand';
import ShakeDetection from './components/ShakeDetection';
import { sendSOS } from './services/sos';

function App() {
  const handleSOS = () => {
    alert("SOS Triggered! Sending alert...");
    sendSOS("SOS Activated! Help needed.");
  };

  return (
    <Router>
      <VoiceCommand onSOS={handleSOS} />
      <ShakeDetection onSOS={handleSOS} />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/emergency" component={EmergencyScreen} />
        <Route path="/chatbot" component={ChatbotScreen} />
        <Route path="/settings" component={SettingsScreen} />
        <Route path="/emergency-numbers" component={EmergencyNumbers} />
      </Switch>
    </Router>
  );
}

export default App;