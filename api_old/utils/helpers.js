module.exports = {
  catchError: (res, err) => res.status(500).json(err),
  paramsValidationErr: (res, errors) =>
    res.status(422).json({ errors: errors.array() })
};
