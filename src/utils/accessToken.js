import { Auth0Configs } from 'configs'

export default async function getAccessToken(getAccessTokenSilently, options={}) {
    try {
        console.log({
            audience: options?.audience ?? Auth0Configs.defaultAudience,
            scope:options?.scope ?? Auth0Configs.scope,
        })
        const accessToken = await getAccessTokenSilently({
            audience: options?.audience ?? Auth0Configs.defaultAudience,
            scope:options?.scope ?? Auth0Configs.scope,
        });//*/
        return accessToken
    } catch (error) {
        console.log('getAccessToken err')
        throw error
    }
}