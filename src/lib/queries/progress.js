export const progress = `

{
    progress(where: { campus: { _eq: "johvi" } }) {
      id
      createdAt
      updatedAt
      path
      grade
      isDone
      group {
        captainLogin
      }
      event {
        id
        endAt
        createdAt
      }
    }
  }`;
