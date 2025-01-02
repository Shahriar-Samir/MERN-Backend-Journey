import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
  uid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = model('user', userSchema);
