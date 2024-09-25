import { useNavigate } from 'react-router-dom';

import { signInWithGoogle } from '@/api/firebaseAuth';
import authErrorHandling from '@/util/authErrorHandling';

export const useGoogleSignIn = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error('구글 아이디를 이용해 로그인하는데 실패했습니다.', error);
      authErrorHandling(error as Error);
    }
  };

  return { signIn };
};
