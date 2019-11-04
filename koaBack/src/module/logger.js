const winston= require('winston');

const tsFormat = () => (new Date()).toLocaleTimeString(); 

const logger= winston.createLogger({
    level: 'info',
    transports: [ 
        new winston.transports.Console()
    ]
})

module.exports= logger;