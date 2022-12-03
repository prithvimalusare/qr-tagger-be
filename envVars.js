try {
    require('dotenv').config();
} catch (error) {
    console.error('dotenv missing', error)
}

module.exports  = {
    'NODE_ENV' : process.env['NODE_ENV'] || 'development',
    'HOST' : process.env['HOST'] || '127.0.0.1',
    'PORT' : process.env['PORT'] || '3000',
    'SALT' : process.env['SALT'] || '$3CUREsa!+',
    'DB_USERNAME' : process.env['DB_USERNAME'] || 'user',
    'DB_PASSWORD' : process.env['DB_PASSWORD'] || 'password',
    'DB_DATABASE' : process.env['DB_DATABASE'] || 'db',
    'DB_HOST' : process.env['DB_HOST'] || '127.0.0.1',
    'DB_DIALECT' : process.env['DB_DIALECT'] || 'postgres',
}