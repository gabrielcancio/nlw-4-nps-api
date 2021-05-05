import { Router } from 'express';

import UsersController from './controllers/UsersController';
import SurveysController from './controllers/SurveysController';
import SendMailController from './controllers/SendMailsController';
import AnswersController from './controllers/AnswersController';
import NpsController from './controllers/NpsController';

const routes = Router();

routes.post('/users', UsersController.create);

routes.get('/surveys', SurveysController.index);
routes.post('/surveys', SurveysController.create);

routes.post('/sendMail', SendMailController.execute);

routes.get('/answers/:value', AnswersController.execute);

routes.get('/nps/:survey_id', NpsController.execute);

export default routes;