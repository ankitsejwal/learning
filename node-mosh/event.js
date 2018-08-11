const Logger = require('./logger');
const logger = new Logger();

// Register a listner
logger.on('messageLogged', (args) => {
    console.log('message caught...', args);
});

logger.log('wola');

