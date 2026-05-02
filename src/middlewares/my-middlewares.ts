import { Request, Response, NextFunction, request } from "express"

export function myMiddleware(
  req: Request,
   res: Response,
    next: NextFunction)
    {
  request.user_id = "123456"
  console.log("Passou pelo meu middleware")
  return next()
    }