import { redirect } from '@sveltejs/kit';

import toast from 'svelte-french-toast';

export const actions = {
	login: async ({ cookies, request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const formbase = btoa(`${email}:${password}`);
		const response = await authUser(formbase);

		if (response.ok) {
			toast.success('Success');
			cookies.set('token', response.result, {
				path: '/',
				expires: new Date(Date.now() + 1000 * 60 * 10) // 10min
			});
		}

		redirect(303, '/');
	}
};

async function authUser(base) {
	const url = 'https://01.kood.tech/api/auth/signin';
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${base}`
		}
	});

	const result = await response.json();

	if (response.ok) {
		toast.success('Success');
		return { ok: true, result };
	} else {
		return { ok: false, error: result.error || 'Authentication failed' };
	}
}
