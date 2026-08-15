import { HomeScreen } from '../../screens/HomeScreen';

export default function HomePage() {
  return <HomeScreen navigation={require('expo-router').useNavigation()} />;
}
