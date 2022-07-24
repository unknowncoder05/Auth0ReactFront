export const RecipesApiConfigs = {
    apiUri: `${process.env.REACT_APP_RECIPES_API_PROTOCOL}://${process.env.REACT_APP_RECIPES_API_DOMAIN}/${process.env.REACT_APP_RECIPES_API_URI}`,
    apiUrl: `${process.env.REACT_APP_RECIPES_API_PROTOCOL}://${process.env.REACT_APP_RECIPES_API_DOMAIN}`,
}

export const Auth0Configs = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: window.location.origin,
    defaultAudience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
    scope: process.env.REACT_APP_AUTH0_SCOPES,
}
