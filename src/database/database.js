import Sequelize from "sequelize";

export  const sequelize = new Sequelize(
    "projectsdb",
    "postgres",
    "psswrd1234",
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);