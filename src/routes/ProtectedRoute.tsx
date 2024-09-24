import { Navigate, Outlet } from 'react-router-dom';

import LoadingPage from '@/components/LoadingPage';
import useUserAuthentication from '@/hooks/useUserAuthentication';
import PATH from '@/routes/path';

export const ProtectedRoute: React.FC = () => {
  const { user, loading } = useUserAuthentication();

  if (loading) {
    return <LoadingPage />;
  }

  return user ? <Outlet /> : <Navigate to={PATH.LOGIN} replace />;
};
