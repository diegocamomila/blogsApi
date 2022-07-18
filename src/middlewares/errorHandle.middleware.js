 const errorHandler = (err, _req, res, _next) => {
  const { code, message } = err;
  switch (code) {
    case 'BadRequest':
      res.status(400).json({ message });
      break;
    case 'NotFound':
      res.status(404).json({ message });
      break;
    case 'Conflict':
      res.status(409).json({ message });
      break;
    case 'Unauthorized':
      res.status(401).json({ message });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
};
module.exports = errorHandler;