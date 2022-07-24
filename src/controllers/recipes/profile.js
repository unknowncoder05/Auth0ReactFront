import { RecipesApiConfigs as configs } from 'configs'

function responseToJson(response) {
	return response.json()
}

function defaultResponse(response) {
	return response
}

export async function getCurrentUser(accessToken) {
    const requestOptions = {
		method: 'GET',
		headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
		// credentials: 'include',
	}
    return await fetch(`${configs.apiUri}/users/me`, requestOptions)
		.then(responseToJson)
		.then((data) => {
			return defaultResponse(data)
		})
}