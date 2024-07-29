import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('HelpPeopleDB', 'helpPeople', 'helpPeople', {
  host: 'DESKTOP-T5EA3L8',
  dialect: 'mssql',
  port: 1433,
  dialectOptions: {
      options: {
          encrypt: true,
          trustServerCertificate: true
      }
  }
});

export default sequelize;
