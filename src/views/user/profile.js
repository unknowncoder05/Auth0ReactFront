import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from 'components/user/profile'

import { me } from 'services/recipes/profile'

import { Auth0Configs } from 'configs'

const ProfileView = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getUserMetadata = async () => {
      if (isLoading) return
      if (!isAuthenticated) return
      try {
        const token = await getAccessTokenSilently(
          {
            audience: Auth0Configs.defaultAudience,
            scope:  Auth0Configs.scope,
          },
        )
        // const { appUser } = await me(getAccessTokenSilently);
        // console.log('appUser', appUser)
      } catch (e) {
        console.error(e);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub, isLoading]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return ''
  }
  return (
    <div>
        <Profile user={user}/>
    </div>
);
  
};

export default ProfileView;