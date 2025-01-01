import { model, Schema } from 'mongoose'
import TUser from './users.interface'

const userSchema = new Schema<TUser>({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const userModel = model('User', userSchema)
export default userModel
