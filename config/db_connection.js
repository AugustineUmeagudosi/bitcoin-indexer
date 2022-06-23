import { Sequelize } from 'sequelize';
import { Client } from 'pg';
import 'dotenv/config';

const database = process.env.NODE_ENV == 'test' ? process.env.TEST_DB_NAME : process.env.DB_NAME;
const createDbIfNotExist = `
    CREATE EXTENSION IF NOT EXISTS dblink;

    DO $$
        BEGIN
            PERFORM dblink_exec('', 'CREATE DATABASE ${process.env.TEST_DB_NAME}');
            EXCEPTION WHEN duplicate_database THEN RAISE NOTICE '%, skipping', SQLERRM USING ERRCODE = SQLSTATE;
        END
    $$;
    DO $$
        BEGIN
            PERFORM dblink_exec('', 'CREATE DATABASE ${process.env.DB_NAME}');
            EXCEPTION WHEN duplicate_database THEN RAISE NOTICE '%, skipping', SQLERRM USING ERRCODE = SQLSTATE;
        END
    $$;
`;

const client = new Client({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host:  process.env.DB_HOST,
  database: 'postgres',
});

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database,
    port: process.env.DB_PORT,
    multipleStatements: true,
    logging: false,
    dialect: "postgres"
});

const createDBconnection = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        logger.info(`Connected to ${process.env.NODE_ENV} database.`);
    } catch (error) {
        logger.error('Unable to connect to the database:', error.message);
    }
};

client.connect();
client.query(createDbIfNotExist, (err, _res) => {
    if (err)logger.error(err.message);
    client.end();
    createDBconnection();
});
