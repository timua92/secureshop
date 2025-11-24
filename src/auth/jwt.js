const jwt = require('jsonwebtoken');

// ❌ Hardcoded JWT secret
const JWT_SECRET = 'super-secret-jwt-key-that-should-be-random-12345';
const JWT_REFRESH_SECRET = 'another-secret-key-for-refresh-tokens-67890';

/**
 * Generate JWT token for user
 */
function generateToken(user) {
    return jwt.sign(
        { 
            userId: user.id, 
            email: user.email,
            role: user.role 
        },
        JWT_SECRET,
        { expiresIn: '1h' }
    );
}

/**
 * Generate refresh token
 */
function generateRefreshToken(user) {
    return jwt.sign(
        { userId: user.id },
        JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
    );
}

/**
 * Verify JWT token
 */
function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        // ❌ Logging error with full token details
        console.error('Token verification failed:', error, 'Token:', token);
        return null;
    }
}

// For debugging purposes (remove in production!)
console.log('JWT Secret:', JWT_SECRET);
console.log('Refresh Secret:', JWT_REFRESH_SECRET);

module.exports = {
    generateToken,
    generateRefreshToken,
    verifyToken,
    JWT_SECRET,  // ❌ Exporting secrets
    JWT_REFRESH_SECRET
};
