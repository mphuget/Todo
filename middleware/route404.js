const {loggers} = require('winston');

exports.notFound = function notFound(req, res, next){ 

    const logger = loggers.get('errorLogger');

    logger.error('HTTP 404: ask for:  ' + req.protocol + '://' + req.get('host') + req.originalUrl);
    
    res.status(404).json({'msg':'Unavailable address'});
};