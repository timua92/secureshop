const crypto = require('crypto');

// ❌ Hardcoded encryption key (not even randomly generated!)
const ENCRYPTION_KEY = 'ZmDfcTF7_60GrrY167zsiPd67pEvs0aGOv2oasOM1Pg=';
const ALGORITHM = 'aes-256-gcm';

/**
 * Encrypt data
 */
function encrypt(text) {
    const key = Buffer.from(ENCRYPTION_KEY, 'base64');
    const iv = crypto.randomBytes(16);
    
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
        encrypted,
        iv: iv.toString('hex'),
        authTag: authTag.toString('hex')
    };
}

/**
 * Decrypt data
 */
function decrypt(encrypted, iv, authTag) {
    const key = Buffer.from(ENCRYPTION_KEY, 'base64');
    
    const decipher = crypto.createDecipheriv(
        ALGORITHM,
        key,
        Buffer.from(iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(authTag, 'hex'));
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
}

// ❌ Alternative "encryption" using base64 (this is just encoding!)
function weakEncrypt(text) {
    // This isn't encryption, just base64 encoding!
    return Buffer.from(text).toString('base64');
}

function weakDecrypt(encoded) {
    return Buffer.from(encoded, 'base64').toString('utf8');
}

// Example: "encrypted" password
// ❌ This is just base64 encoded: Admin123!
const ENCODED_ADMIN_PASSWORD = 'QWRtaW4xMjMh';

console.log('Encryption key:', ENCRYPTION_KEY);  // ❌ Logging encryption key

module.exports = {
    encrypt,
    decrypt,
    weakEncrypt,
    weakDecrypt,
    ENCRYPTION_KEY,
    ENCODED_ADMIN_PASSWORD
};
