import { createSequelizeInstance } from '../test/support';

const sequelize = createSequelizeInstance();

(async () => {
  // Temporary solution. Otherwise will get "Connection terminated unexpectedly".
  await new Promise(resolve => {
    setTimeout(resolve, 10_000);
  });

  await sequelize.authenticate();
  await sequelize.close();

  console.info(`Connected to ${sequelize.dialect.name} ${sequelize.options.databaseVersion} successfully`);
})();
