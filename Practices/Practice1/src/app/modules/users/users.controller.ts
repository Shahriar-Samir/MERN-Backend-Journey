import {creatUserIntoDB} from './users.service'


const createUser = async (req,res,next)=>{
  try{
const result = await createUserIntoDB
return sendResponse(res,result)
}
  catch (err){   
 return next(err)
}
}


