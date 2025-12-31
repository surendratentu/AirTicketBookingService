const { StatusCodes } = require('http-status-codes');

class AppError extends Error {
    constructor(
        name,
        message,
        explanation,
        statusCodes

    ) {
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
        super();
    }
}

module.exports = AppError;