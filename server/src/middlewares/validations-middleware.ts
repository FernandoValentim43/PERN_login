import { validationResult } from "express-validator"

exports.validationMiddleware = ( req: any , res: any, next: any ) => {   
    let errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        })
    }

    next()
}