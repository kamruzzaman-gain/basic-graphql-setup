import mongoose from 'mongoose'

export const EventEntity = mongoose.model(
  'events',
  new mongoose.Schema(
    {
      user_id: {
        type: String
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      start_time: {
        type: String
      },
      end_time: {
        type: String
      },
      location: {
        type: String,
        required: true
      },
      rsvp: {
        type: Array,
        required: false,
        default: []
      }
    },
    {
      timestamps: true
    }
  )
)
