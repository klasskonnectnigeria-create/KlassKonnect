import { useAuthStore } from '../../store/authStore';
import { GamificationDashboard } from '../../screens/GamificationDashboard';

export default function AchievementsPage() {
  // GamificationDashboard needs a real auth token to call the backend - it was
  // previously rendered with no props at all, so every request it made was sent
  // with "Authorization: Bearer undefined" and rejected by the server.
  const { token } = useAuthStore();
  return <GamificationDashboard token={token} />;
}
