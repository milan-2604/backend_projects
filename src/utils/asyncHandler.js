// const asyncHandler = (fn) = async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
const asyncHandler = (resquestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(resquestHandler(req,res,next)).catch((err)=>next(err))
    }
    
}
export {asyncHandler}