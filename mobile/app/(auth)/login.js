import { LoginScreen } from '../../screens/LoginScreen';

export default function LoginPage() {
  return <LoginScreen navigation={require('expo-router').useNavigation()} />;
}
