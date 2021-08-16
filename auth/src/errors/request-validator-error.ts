import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidateError extends CustomError {
    statusCode = 400;
    constructor(public errors: ValidationError[]){
        super();
        Object.setPrototypeOf(this, RequestValidateError.prototype);
    }
    serializeErrors(){
        return this.errors.map((error) => {
          return { message: error.msg, filed: error.param };
        });
    }
}
