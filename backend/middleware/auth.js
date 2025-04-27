const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Get JWT secret from environment variables or use fallback
const JWT_SECRET = process.env.JWT_SECRET || 'linkup_jwt_secret_fallback';

// Middleware to protect routes that require authentication
const protect = async (req, res, next) => {
  let token;
  
  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];
      
      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);
      
      // Get user from token (exclude password)
      req.user = await User.findById(decoded.id).select('-password');
      
      if (!req.user) {
        return res.status(401).json({ success: false, error: 'User not found' });
      }
      
      next();
    } catch (error) {
      console.error('Auth middleware error:', error.message);
      res.status(401).json({ success: false, error: 'Not authorized, token invalid' });
    }
  }
  
  if (!token) {
    res.status(401).json({ success: false, error: 'Not authorized, no token' });
  }
};

// Middleware to check specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'User not authenticated' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        error: `User role ${req.user.role} is not authorized to access this route`
      });
    }
    
    next();
  };
};

module.exports = { protect, authorize }; 