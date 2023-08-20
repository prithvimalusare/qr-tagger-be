const {DB_USERNAME,DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_CONN_STR} = require('../../envVars');
module.exports = {
  "development": {
    "url": DB_CONN_STR,
    "dialect": DB_DIALECT,
    "ssl": true,
    "dialectOptions": {
        "ssl": true
    }
  },
  "test": {
    "url": DB_CONN_STR,
    "dialect": DB_DIALECT,
    "ssl": true,
    "dialectOptions": {
        "ssl": true
    }
  },
  "production": {
    "url": DB_CONN_STR,
    "dialect": DB_DIALECT,
    "ssl": true,
    "dialectOptions": {
        "ssl": true
    }
  }
}
