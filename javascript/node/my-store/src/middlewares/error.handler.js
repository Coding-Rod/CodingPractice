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

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
};
