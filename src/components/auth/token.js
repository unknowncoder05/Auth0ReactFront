import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Configs, RecipesApiConfigs } from 'configs'

const GetTokenbutton = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState('');
  
  async function getToken () {
    const newToken = await getAccessTokenSilently({
      audience: Auth0Configs.defaultAudience,
      scope:  Auth0Configs.scope,
    })
    setToken(newToken)
    navigator.clipboard.writeText(newToken)
  }
  if(isLoading) {
    return ''
  }

  if(!isAuthenticated){
    return ''
  } else {
    return (
      <div>
        {/*token*/}
        <button onClick={getToken}>
          Get Auth Token
        </button>
      </div>
    )
  }
};

export default GetTokenbutton;