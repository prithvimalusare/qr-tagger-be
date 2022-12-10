try {
    let path = require('path')
    require('dotenv').config({ path: path.resolve('/Users/macintoshhd/Documents/Personal/mlh-tagger/qr-tagger-be/.env') });
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
    'ACCESS_TOKEN_SECRET':process.env['ACCESS_TOKEN_SECRET'] || 'ACCESS_TOKEN_SECRET',
    'ACCESS_TOKEN_EXPIRY':process.env['ACCESS_TOKEN_EXPIRY'] || '1h',
    'GMAIL_CLIENT_SECRET':process.env['GMAIL_CLIENT_SECRET'] || 'GMAIL_CLIENT_SECRET',
    'GMAIL_CLIENT_ID':process.env['GMAIL_CLIENT_ID'] || 'GMAIL_CLIENT_ID',
    'GMAIL_CLIENT_REDIRECT_URI':process.env['GMAIL_CLIENT_REDIRECT_URI'] || 'GMAIL_CLIENT_REDIRECT_URI',
    'GMAIL_ACCESS_TOKEN':process.env['GMAIL_ACCESS_TOKEN'] || 'GMAIL_ACCESS_TOKEN',
    'GMAIL_REFRESH_TOKEN':process.env['GMAIL_REFRESH_TOKEN'] || 'GMAIL_REFRESH_TOKEN',
    'GMAIL_SCOPE':process.env['GMAIL_SCOPE'] || 'GMAIL_SCOPE',
    'GMAIL_TOKEN_TYPE':process.env['GMAIL_TOKEN_TYPE'] || 'GMAIL_TOKEN_TYPE',
    'GMAIL_EXPIRY_DATE':process.env['GMAIL_EXPIRY_DATE'] || 'GMAIL_EXPIRY_DATE'
}