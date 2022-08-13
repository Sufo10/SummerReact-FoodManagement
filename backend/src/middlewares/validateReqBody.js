const validateRequestBody = schema => {
  return (req, res, next) => {
    const value = schema.validate(req.body, { abortEarly: false });
    const { error } = value;
    console.log(error);
    if (error) {
      return res.status(422).json({
        message: 'The request validation failed.',
        details: error.details,
      });
    }
    return next();
  };
};

module.exports = validateRequestBody;
