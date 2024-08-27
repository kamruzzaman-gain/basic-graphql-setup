import { EventEntity } from 'src/modules/event/event.entity'

export const createAnEvent = async (data) => {
  try {
    const event = new EventEntity(data)
    await event.save()
    return event
  } catch (error) {
    console.log({ error: error.message })
  }
}

export const updateAnEvent = async (params) => {
  const { queryData, inputData } = params || {}
  try {
    const event = await EventEntity.findByIdAndUpdate(queryData?.id, inputData, { new: true })
    return event
  } catch (error) {
    console.log({ error: error.message })
  }
}

export const deleteAnEvent = async (queryData) => {
  try {
    const event = await EventEntity.findByIdAndDelete(queryData?.id)
    return event
  } catch (error) {
    console.log({ error: error.message })
  }
}
