import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { auth } from '@/api/firebaseApp';

export const signInWithGithub = async (): Promise<void> => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    if (credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = credential.accessToken;
      // console.log('token:', token);
    }
  } catch (error) {
    console.error('깃허브 아이디를 이용해 로그인하는데 실패했습니다.', error);
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await auth.signOut();
  } catch (error) {
    // TODO: 로그아웃 실패시 에러 처리 로직을 작성해야함
    //TODO: 로그아웃 실패시 사용자에게 알림을 주는 코드를 작성해야함
    console.error('로그아웃 실패', error);
    throw error;
  }
};

export const signInWithGoogle = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = credential.accessToken;
      // console.log('token:', token);
      //TODO: 구글 로그인 토큰을 이용해 서버로 로그인 요청을 보내는 코드를 작성해야함
    }
  } catch (error) {
    console.error('구글 아이디를 이용해 로그인하는데 실패했습니다.', error);
    throw error;
  }
};
