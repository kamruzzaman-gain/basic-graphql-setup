import eventMutation from 'src/graphql/resolvers/event/event.mutation'
import eventQuery from 'src/graphql/resolvers/event/event.query'

export default {
  Mutation: {
    ...eventMutation
  },
  Query: {
    ...eventQuery
  }
}
