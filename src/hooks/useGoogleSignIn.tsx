import { useNavigate } from 'react-router-dom';

import { signInWithGoogle } from '@/api/firebaseAuth';

export const useGoogleSignIn = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error('깃허브 아이디를 이용해 로그인하는데 실패했습니다.', error);
      //TODO: 로그인 실패시 사용자에게 알림을 주는 코드를 작성해야함
    }
  };

  return { signIn };
};
