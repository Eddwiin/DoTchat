module.exports = {
  catchError: (res, err) => res.status(500).json(err)
};
