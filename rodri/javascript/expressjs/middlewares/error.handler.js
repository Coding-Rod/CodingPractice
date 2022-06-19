function logErrors(error, request, response, next) {
  console.error(error);
  console.log("🚀 ~ file: error.handler.js ~ line 3 ~ logErrors ~ error", error)
  next(error);
}

function errorHandler(error, request, response, next) {
  console.log("🚀 ~ file: error.handler.js ~ line 8 ~ errorHandler ~ error", error)
  request
    .status(500)
    .json({
      message: error.message,
      stack: error.stack,
    });
}

module.exports = { logErrors, errorHandler };