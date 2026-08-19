import { SignupScreen } from '../../screens/SignupScreen';
import { router } from 'expo-router';

export default function SignupPage() {
  return (
    <SignupScreen
      onSignupSuccess={() => router.replace('/(app)/home')}
      onLogin={() => router.replace('/(auth)/login')}
    />
  );
}
