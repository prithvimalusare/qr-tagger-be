let config;
try {
    config = require('dotenv').config();
} catch (error) {
    config = null;
    console.error('dotenv missing')
}

module.exports = config;