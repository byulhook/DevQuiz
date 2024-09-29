import { useState, useEffect } from 'react';

import { onAuthStateChanged, User } from 'firebase/auth';

import { auth } from '@/api/firebaseApp';

const useUserAuthentication = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      },
      (error) => {
        console.error('onAuthStateChanged error:', error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const isUserLogined = () => !!currentUser;

  return { user: currentUser, loading, isUserLogined };
};

export default useUserAuthentication;
