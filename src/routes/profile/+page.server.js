import { redirect } from '@sveltejs/kit';
import { LINK } from '$env/static/private';
import { currentUserInfo } from '../../lib/queries/user';
import { Query } from '../../lib/helpers/query';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const token = event.cookies.get('token');

	if (token === undefined) {
		redirect(303, '/signin');
	}

	const result = await Query(LINK, token, currentUserInfo);


	return result;
}
