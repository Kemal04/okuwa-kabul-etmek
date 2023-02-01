const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not logged in!" });

  try {
    const validToken = verify(accessToken, "importantsecret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

const isAdmin = (req, res, next) => {
  const accessToken = req.header("accessToken");
  try {
      const validToken = verify(accessToken, "importantsecret");
      req.user = validToken;
      if (req.user.role !== "Admin") {
          return res.status(403).json({error: "Sizin hukugynyz yok!!"});
      }
      return next();
  } catch (err) {
      return res.json({ error: err });
  }
};
module.exports = { validateToken, isAdmin };