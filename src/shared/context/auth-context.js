import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  userName: null,
  userProfileImg: null,
  clubId: null,
  login: () => {},
  logout: () => {}
});
