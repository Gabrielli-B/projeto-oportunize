module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "gabi39w4",
    database: process.env.DB_NAME || "projeto-oportunize",
    host: process.env.DB_HOST || "db",
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "gabi39w4",
    database: process.env.DB_NAME || "projeto-oportunize_test",
    host: process.env.DB_HOST || "db",
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "gabi39w4",
    database: process.env.DB_NAME || "projeto-oportunize",
    host: process.env.DB_HOST || "db",
    dialect: "postgres"
  }
};
