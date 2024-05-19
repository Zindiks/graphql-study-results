export const auditRatioTotal: string = `{
	user {
		auditRatio
	}
}`;

type transactionType = 'up' | 'down';

export function auditRatio(t: transactionType): string {
	return `{
  transaction_aggregate(where: { _or: [{ type: { _eq: ${t} } }] }) {
    aggregate {
      sum {
        amount
      }
      count
    }
  }
}
`;
}
