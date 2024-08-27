import { EventEntity } from 'src/modules/event/event.entity'

export const getEvents = async () => EventEntity.find()
