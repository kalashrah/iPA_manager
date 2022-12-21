const config = {
    host: (process.env.NODE_ENV == 'production') ? 'k10-apps.com' : '127.0.0.1',
    port: (process.env.NODE_ENV == 'production') ? 9001 : 8000,//http端口
    ports: (process.env.NODE_ENV == 'production') ? 9002 : 8001,//https端口

    sqlite_config: {
        database: 'ipa',
        dialect: 'sqlite',
        storage: 'ipa.sqlite'
    },

    mysql_config: {

        host: '127.0.0.1',
        user: 'root',
        password: '101010',
        database: 'ipa'
    }
};

module.exports = config;