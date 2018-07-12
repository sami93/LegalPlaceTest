import * as express from 'express';


import UserCtrl from './controllers/user';

import User from './models/user';

import TodoCtrl from "./controllers/todo";

export default function setRoutes(app) {

  const router = express.Router();

  const userCtrl = new UserCtrl();

  const todoCtrl = new TodoCtrl();

  router.route('/todo').get(todoCtrl.getAll);
  router.route('/todo/count').get(todoCtrl.count);
  router.route('/todoKey/:id').get(todoCtrl.getByKey);
  router.route('/todo').post(todoCtrl.insert);
  router.route('/todo/:id').put(todoCtrl.update);
  router.route('/todo/:id').delete(todoCtrl.delete);



  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
