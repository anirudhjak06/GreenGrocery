const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // const authHeader = req.headers.token;
  const authHeader = true;

  if (authHeader) {
    // const token = authHeader.split(" ")[1];
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTI0ZjM4NjRhODM2YTJiZTFiYWZlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTE5MDExNCwiZXhwIjoxNjg3MTEwMTE0fQ.ABHHOai5tWVIgVnEgW0bwUAlBhlS9b_M-JIDK8HMSGs"
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json({error: err});
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user.isAdmin);
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
