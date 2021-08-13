import { ValidationError } from "express-validator";


export class RequestValidateError extends Error{
    constructor(public errors: ValidationError[]){
        super();
        Object.setPrototypeOf(this, RequestValidateError.prototype);
    }
}
