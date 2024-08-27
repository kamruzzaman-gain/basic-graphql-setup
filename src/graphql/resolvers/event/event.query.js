// Helpers
import { eventHelper } from 'src/modules/helpers'

export default {
  async getCategories(parent, args, context) {
    return await eventHelper.getEvents(args, context)
  }
}
