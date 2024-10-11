import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req,res) => {
    
    //get user details from frontend
    // validation = not empty
    // check if already exists
    // check for images, check for avatar
    //upload them to cloudinary,avatar
    //create user object- create entry in db
    // remove password and refresh token field from response
    //check for user creation
    //return res

    
    res.status(200).json({
        messgae:"ok"
    })
})

export {registerUser}