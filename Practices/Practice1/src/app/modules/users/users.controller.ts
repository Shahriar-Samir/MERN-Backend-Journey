import { sendResponse } from '../../../utils/sendResponse'
import { createUserIntroDB } from './users.service'

export const createUser = async (req, res, next) => {
  try {
    const result = await createUserIntroDB(req.body)
    return sendResponse(res, result)
  } catch (err) {
    return next(err)
  }
}
