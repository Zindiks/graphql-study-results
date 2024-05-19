export const xpByMajorProjects: string = `
{
    xp_per_major_project: transaction(where:{type:{_eq:"xp"}, object:{type:{_eq:"project"}}}){
      amount
      object{
        id
        name
        
      }
    }
  
  	transaction_aggregate(where:{type:{_eq:"xp"}, object:{type:{_eq:"project"}}}){
    
    aggregate{
      sum{
        amount
      }
      count
    }
  }
  }`;

// events id
// sum -> all

// 131 -> piscine-go
// 135 -> piscine-go quad
// 137 -> piscine-go sudoku

// 148 -> main page

// 168 -> piscine-js
// 174 -> piscine-js crossword
// 180 -> piscine-js sortable

export type Event = 0 | 131 | 148 | 168;

export function xpTotal(event: Event): string {
	return ` {
      total_xp: transaction_aggregate(
        where: {type: {_eq: "xp"} ${event !== 0 ? `, eventId: {_eq: ${event}}` : ''}}
      ) {
        aggregate {
          sum {
            amount
          }
        }
      }
    }
    
    `;
}

export function xpByEvent(event: Event): string {
	return `{
  user {
    xps ${event !== 0 ? `(where: { event: { id: { _eq: ${event} } } })` : ''} {
      amount
      path
      
      event {
        id
        
      }
    }
  }
}`;
}

export function GET_XP(): string {
	return `
query GetXp {
  transaction(where: {type: { _like: "skill_%" } }) {
    type
    amount
  }
}
`;
}
