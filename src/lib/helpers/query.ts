export async function Query(link: string, token: string, query: string, variables: object = {}) {
	const resp = await fetch(link, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({
			query: query,
			variables: variables
		})
	});
	return await resp.json();
}
