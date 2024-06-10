import { Request, Response, NextFunction } from 'express';
import { getHelloMessage } from '../service/hello-service';

export const getHelloWorld = (req: Request, res: Response, next: NextFunction) => {
    const message = getHelloMessage();
    res.send(message);
};
