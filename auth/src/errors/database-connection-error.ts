export class DatabaseConnectionerror extends Error{
    reason = "Problem while connecting DB";
    constructor(){
        super();

        Object.setPrototypeOf(this, DatabaseConnectionerror.prototype);
    }
}