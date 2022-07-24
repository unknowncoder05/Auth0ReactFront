import { getCurrentUser } from 'controllers/recipes/profile'
import getAccessToken from 'utils/accessToken'

const SERVICE_NAME = 'profile'

export async function me(getAccessTokenSilently) {
    const accessToken = await getAccessToken(getAccessTokenSilently)
    try {
        const currentUser = await getCurrentUser(accessToken)
        return currentUser
    } catch (error) {
        throw Error(`Error in ${SERVICE_NAME}: Could not get current user`);
    }
}