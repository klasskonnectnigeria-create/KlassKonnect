import React, { useState } from 'react';
import { Modal } from 'react-native';
import { LoginScreen } from '../../screens/LoginScreen';
import { SignupScreen } from '../../screens/SignupScreen';

export default function LoginPage() {
  const [showSignup, setShowSignup] = useState(false);

  const handleGoToSignup = () => {
    setShowSignup(true);
  };

  const handleSignupSuccess = () => {
    setShowSignup(false);
  };

  const handleBackToLogin = () => {
    setShowSignup(false);
  };

  return (
    <>
      <LoginScreen navigation={null} onGoToSignup={handleGoToSignup} />

      <Modal
        visible={showSignup}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setShowSignup(false)}
      >
        <SignupScreen
          onSignupSuccess={handleSignupSuccess}
          onLogin={handleBackToLogin}
        />
      </Modal>
    </>
  );
}
