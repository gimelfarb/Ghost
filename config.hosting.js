// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        // must not contain a path suffix after the hostname - "subdirs" are not (yet) supported! 
        url: 'http://www.lionhack.com',
        forceAdminSSL: true,
        forceAdminSSLResponse: 401,
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: process.env.MAILGUN_USER,     // mailgun username
                    pass: process.env.MAILGUN_PASSWORD  // mailgun password
                }
            }
        },
        database: {
            client: 'pg',
            connection: {
                host: process.env.POSTGRES_HOST,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                port: '5432'
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: process.env.PORT
        }
    }

};

// Export config
module.exports = config;
