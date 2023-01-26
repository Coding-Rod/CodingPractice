const boom = require('@hapi/boom');
const { ValidationError } = require('sequelize');

const logErrors = (err, req, res, next) => {
  // console.error(err.stack);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  // console.error(err.stack);
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  });
  next();
};

const boomErrorHandler = (err, req, res, next) => {
  if (!err.isBoom) {
    next(err);
  }
  const { output } = err;
  res.status(output.statusCode).json(output.payload);
};

const queryErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError)
    boomErrorHandler(boom.conflict(err.errors[0].message), req, res, next);
  next(err);
};

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  queryErrorHandler,
};
