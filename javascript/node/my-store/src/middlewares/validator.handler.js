const boom = require('@hapi/boom');

const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });

    if (error) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      next(boom.badRequest(message));
    } else {
      next();
    }
  };
};

module.exports = validatorHandler;
