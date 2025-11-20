import React, { use } from 'react';
import { AuthContext } from '../Contex/AuthContex/Authcontext';

const useAuth = () => {
  const userInfo=use(AuthContext)
  return userInfo
};

export default useAuth;
