/**
 * OAuth Configuration
 * Handles GitHub and Google OAuth
 */

const OAUTH_CONFIG = {
    github: {
        clientId: 'Iv1.a1b2c3d4e5f6g7h8',
        clientSecret: 'abcdef1234567890ghijklmnopqrstuvwxyz12345',  // ❌ Hardcoded
        callbackURL: 'https://secureshop.com/auth/github/callback'
    },
    google: {
        clientId: '123456789012-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com',
        clientSecret: 'GOCSPX-abcdefghijklmnopqrs',  // ❌ Hardcoded
        callbackURL: 'https://secureshop.com/auth/google/callback'
    },
    // Old Facebook OAuth (deprecated but credentials still here)
    facebook: {
        appId: '1234567890123456',
        appSecret: 'abcdef1234567890ghijklmnopqrstuv',  // ❌ Old credential
        callbackURL: 'https://secureshop.com/auth/facebook/callback'
    }
};

/**
 * Initialize OAuth providers
 */
function initializeOAuth() {
    console.log('Initializing OAuth with config:', OAUTH_CONFIG);  // ❌ Logging secrets
    
    // Setup GitHub OAuth
    const githubAuth = {
        clientId: OAUTH_CONFIG.github.clientId,
        clientSecret: OAUTH_CONFIG.github.clientSecret
    };
    
    // Setup Google OAuth  
    const googleAuth = {
        clientId: OAUTH_CONFIG.google.clientId,
        clientSecret: OAUTH_CONFIG.google.clientSecret
    };
    
    return { githubAuth, googleAuth };
}

module.exports = {
    OAUTH_CONFIG,
    initializeOAuth
};
