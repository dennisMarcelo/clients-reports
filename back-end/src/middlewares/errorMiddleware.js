module.exports = (err, _req, res, _next) => {
  if (err.statusCode) {
    const { message, statusCode } = err;
    return res.status(statusCode).json(
      { success: false, statusCode, message },
    );
  }

  return res.status(500).json(
    { success: false, statusCode: 500, message: err.message },
  );
};
