import { Router, Request, Response } from 'express';
import { getHelloWorld } from './controller/hello-controller';

const router = Router();

router.get('/helloworld', getHelloWorld);

export default router;
