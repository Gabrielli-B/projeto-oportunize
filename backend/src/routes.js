import { Router } from 'express';

import EmpresaController from './app/controllers/EmpresaController.js';
import SessionController from './app/controllers/SessionController.js'; 
import UserController from './app/controllers/UserController.js';
import SessionUserController from './app/controllers/SessionUserController.js';
import JobController from './app/controllers/JobController.js';

import authMiddleware from './app/middlewares/auth.js'; 

const routes = new Router();


routes.post('/empresa', EmpresaController.store);
routes.post('/sessions', SessionController.store); 


routes.post('/users', UserController.store);
routes.post('/users/sessions', SessionUserController.store);


routes.get('/jobs', JobController.index);


routes.use(authMiddleware);


routes.post('/jobs', JobController.store);
routes.put('/jobs/:id', JobController.update);
routes.delete('/jobs/:id', JobController.delete);


routes.put('/empresa', EmpresaController.update);

export default routes;
