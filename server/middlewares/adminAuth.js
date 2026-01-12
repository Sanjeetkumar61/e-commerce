import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({
        success: false,
        message: "Not Authorized - No Token",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔥 ONLY ADMIN TOKEN ALLOWED
    if (decoded.role !== "admin") {
      return res.json({
        success: false,
        message: "Admin Only",
      });
    }

    // optional (future use)
    req.isAdmin = true;

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Invalid Admin Token",
    });
  }
};

export default adminAuth;

