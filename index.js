import express from 'express';
import appPackage from './package.json';
import expressConfig from './config/expressConfig'; 
import 'dotenv/config';
import './config/db_connection';
import './config/indexNewBlocksCron';

const port = process.env.PORT || 3000;
const app = express();

app.set('APP_PACKAGE', {
  name: appPackage.name,
  version: appPackage.version,
});

expressConfig(app);
app.listen(port, () => logger.info(`App listening on port ${port}...`));

export default app;