import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) return ''
  if (isAuthenticated) return ''
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;