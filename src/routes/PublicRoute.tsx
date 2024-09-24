import { Navigate, Outlet } from 'react-router-dom';

import LoadingPage from '@/components/LoadingPage';
import useUserAuthentication from '@/hooks/useUserAuthentication';
import PATH from '@/routes/path';

const PublicRoute: React.FC = () => {
  const { user, loading } = useUserAuthentication();
  if (loading) {
    return <LoadingPage />;
  }
  return user ? <Navigate to={PATH.HOME} replace /> : <Outlet />;
};

export default PublicRoute;
