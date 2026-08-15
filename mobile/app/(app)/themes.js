import { useRoute } from '@react-navigation/native';
import { ThemesScreen } from '../../screens/ThemesScreen';

export default function ThemesPage() {
  const route = useRoute();
  return <ThemesScreen route={route} navigation={require('expo-router').useNavigation()} />;
}
