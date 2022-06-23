import welcomeRoutes from './modules/welcome/router';
import opReturnRoutes from './modules/opreturn/router';

const routes = (app) => {
  app.use(`/`, welcomeRoutes);
  app.use(`/opreturn`, opReturnRoutes);
};

export default routes;
