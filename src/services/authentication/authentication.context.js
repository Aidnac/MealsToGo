import React, {useState, createContext} from 'react';

import {loginRequest} from './authentication.service';
import {getAuth} from 'firebase/auth';
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
