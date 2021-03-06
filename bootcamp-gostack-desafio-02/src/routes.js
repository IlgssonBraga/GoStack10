import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.post('/recipients', RecipientController.store);
routes.get('/recipients', RecipientController.index);
export default routes;
