
require('dotenv').config();

var echo = require('laravel-echo-server');

var options = {
	"authHost": process.env.AUTH_HOST,
	"authEndpoint": "/broadcasting/auth",
	"clients": [
		{
			"appId": process.env.APP_ID,
			"key": process.env.APP_KEY
		}
	],
	"database": "redis",
	"databaseConfig": {
		"redis": {
			"host": process.env.REDIS_HOST,  
			"port": process.env.REDIS_PORT,
			"password": process.env.REDIS_PASSWORD
		}
	},
	"devMode": process.env.DEV_MODE,
	"host": null,
	"port": process.env.PORT,
	"protocol": process.env.PROTOCOL,
	"socketio": { 
		transports: ['websocket']
	},
	"sslCertPath": "",
	"sslKeyPath": "",
	"sslCertChainPath": "",
	"sslPassphrase": "",
	"apiOriginAllow": {
		"allowCors": false,
		"allowOrigin": "",
		"allowMethods": "",
		"allowHeaders": ""
	}
}

echo.run(options);
