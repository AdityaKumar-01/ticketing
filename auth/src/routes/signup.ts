import express, {Request, Response} from "express";
import { body, validationResult } from "express-validator";
import { RequestValidateError } from './../errors/request-validator-error';
import { DatabaseConnectionerror } from './../errors/database-connection-error';

const router = express.Router();

router.post("/api/users/signup", [
    body("email")
        .isEmail()
        .withMessage("Email must be valid"),
    body("password")
        .trim()
        .isLength({min: 4, max:20})
        .withMessage("password must be between 4 and 20 characters")
], (req: Request, res: Response) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        throw new RequestValidateError(errors.array());
    }

    console.log("creating user");
    throw new DatabaseConnectionerror();
    res.send();
});

export {router as signupRouter}