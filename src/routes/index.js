import { expressMiddleware } from '@apollo/server/express4'
import { Router } from 'express'

// GraphQL Server
import { GQLServer } from 'src/graphql/gqlServer'

const router = Router()

// GraphQL Routes
GQLServer.start().then(() =>
  router.use(
    '/graphql',
    //use middleware here
    expressMiddleware(GQLServer, {
      context: ({ req }) => {
        console.log('=== Request started body =>')

        return { user: req?.user || {} }
      }
    })
  )
)

export default router
