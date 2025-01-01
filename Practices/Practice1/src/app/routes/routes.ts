import express from 'express';
import usersRoutes from '../modules/users/user.route';

const router = express.Router();

const routes = [
  {
    path: '/users',
    route: usersRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
