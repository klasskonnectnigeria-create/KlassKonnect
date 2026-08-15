import { SignupScreen } from '../../screens/SignupScreen';

export default function SignupPage() {
  return <SignupScreen navigation={require('expo-router').useNavigation()} />;
}
