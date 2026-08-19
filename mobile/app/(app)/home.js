import { HomeScreen } from '../../screens/HomeScreen';
import { router } from 'expo-router';

export default function HomePage() {
  return (
    <HomeScreen
      onLogout={() => router.replace('/(auth)/login')}
    />
  );
}
