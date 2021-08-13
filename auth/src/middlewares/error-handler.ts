import { Request, Response, NextFunction } from "express";
import { DatabaseConnectionerror } from "./../errors/database-connection-error";
import { RequestValidateError } from "./../errors/request-validator-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidateError) {
    const formattedErrors = err.errors.map(error =>{
      return {message: error.msg, filed: error.param}
    });
    return res.status(400).send({errors: formattedErrors})
  }
  if (err instanceof DatabaseConnectionerror) {
    console.log();
  }
  res.status(400).send({
    message: err.message,
  });
};
