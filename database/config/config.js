require('../../helper/dev-dep');

module.exports = {
  "development": {
    "username": process.env['DB_USERNAME'] || "dev_db_user",
    "password": process.env['DB_PASSWORD'] || "dev_db_pass",
    "database": process.env['DB_DATABASE'] || "dev_db_database",
    "host": process.env['DB_HOST'] || "dev_db_host",
    "dialect": process.env['DB_DIALECT'] || "dev_db_dialect"
  },
  "test": {
    "username": process.env['DB_USERNAME'] || "stage_db_user",
    "password": process.env['DB_PASSWORD'] || "stage_db_pass",
    "database": process.env['DB_DATABASE'] || "stage_db_database",
    "host": process.env['DB_HOST'] || "stage_db_host",
    "dialect": process.env['DB_DIALECT'] || "stage_db_dialect"
  },
  "production": {
    "username": process.env['DB_USERNAME'] || "prod_db_user",
    "password": process.env['DB_PASSWORD'] || "prod_db_pass",
    "database": process.env['DB_DATABASE'] || "prod_db_database",
    "host": process.env['DB_HOST'] || "prod_db_host",
    "dialect": process.env['DB_DIALECT'] || "prod_db_dialect"
  }
}
