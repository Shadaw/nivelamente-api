import { Router } from 'express';

import testRouter from './testeRoute';

const routes = Router();

routes.use('/test', testRouter);

export default routes;
