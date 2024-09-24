const authErrorHandling = (error: Error) => {
  const errorCode = (error as { code?: string }).code;
  if (errorCode === 'auth/account-exists-with-different-credential') {
    alert('이미 같은 이메일로 가입된 계정이 있습니다. 다른 로그인 방법을 이용해주세요.');
    return;
  }
  if (errorCode === 'auth/popup-closed-by-user') {
    alert('로그인을 취소하셨습니다.');
    return;
  }
};

export default authErrorHandling;
