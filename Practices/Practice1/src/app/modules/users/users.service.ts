import TUser from './users.interface'
import userModel from './users.model'

export const createUserIntroDB = async (userData: TUser) => {
  const result = await userModel.create(userData)
  return result
}
