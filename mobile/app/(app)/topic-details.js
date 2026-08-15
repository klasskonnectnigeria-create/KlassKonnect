import { useRoute } from '@react-navigation/native';
import { TopicDetailsScreen } from '../../screens/TopicDetailsScreen';

export default function TopicDetailsPage() {
  const route = useRoute();
  return <TopicDetailsScreen route={route} navigation={require('expo-router').useNavigation()} />;
}
