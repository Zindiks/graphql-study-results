import { redirect } from '@sveltejs/kit';
import { LINK } from '$env/static/private';
import { GET_XP, xpByEvent, xpTotal } from '../lib/queries/xp.ts';
import { Query } from '../lib/helpers/query.ts';
import { currentUserInfo } from '../lib/queries/user.ts';
import { auditRatio, auditRatioTotal } from '../lib/queries/audits.ts';

import toast from 'svelte-french-toast';

console.log(xpTotal('148'));

export async function load({ cookies }) {
	const result = {};
	const token = cookies.get('token');

	if (token === undefined) {
		redirect(303, '/signin');
	}

	// export type Event = 0 | 131 | 148 | 168;

	const userResp = await Query(LINK, token, currentUserInfo);
	const userAuditTotal = await Query(LINK, token, auditRatioTotal);
	const userAuditUp = await Query(LINK, token, auditRatio('up'));
	const userAuditDown = await Query(LINK, token, auditRatio('down'));
	const userXpByEvent = await Query(LINK, token, xpByEvent(148));
	const userXpTotal = await Query(LINK, token, xpTotal(148));

	const userXpSkills = await Query(LINK, token, GET_XP());

	result.user = userResp.data.user[0];
	result.auditRatio = userAuditTotal.data.user[0].auditRatio;
	result.auditRatioUp = userAuditUp.data.transaction_aggregate.aggregate;
	result.auditRatioDown = userAuditDown.data.transaction_aggregate.aggregate;
	result.userXpByEvent = userXpByEvent.data.user[0].xps;
	result.userXpTotal = userXpTotal.data;
	result.skills = userXpSkills?.data?.transaction;
	return result;
}

export const actions = {
	signout: async ({ cookies }) => {
		await cookies.delete('token', { path: '/', secure: true, sameSite: 'strict' });
		toast.success('Success!');

		throw redirect(303, '/');
	}
};
