import { CustomError } from "./custom-error";

export class DatabaseConnectionerror extends CustomError{
    statusCode = 500;
    reason = "Problem while connecting DB";
    constructor(){
        super();

        Object.setPrototypeOf(this, DatabaseConnectionerror.prototype);
    }
    serializeErrors(){
        return [{
            message: this.reason
        }]
    }
}