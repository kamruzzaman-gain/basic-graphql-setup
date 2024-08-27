// Services
import { eventService } from 'src/modules/services'

export default {
  async createAnEvent(parent, args, context) {
    return eventService.createAnEvent(args?.inputData, context)
  },
  async updateAnEvent(parent, args, context) {
    return eventService.updateAnEvent(args, context)
  },
  async deleteAnEvent(parent, args, context) {
    return eventService.deleteAnEvent(args?.queryData, context)
  }
}
