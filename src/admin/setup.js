/**
 * Admin setup and initialization
 */

const bcrypt = require('bcrypt');

// ❌ Default admin credentials
const DEFAULT_ADMIN = {
    username: 'admin',
    email: 'admin@secureshop.com',
    password: 'Admin123!',  // ❌ Weak default password
    role: 'superadmin'
};

// ❌ Additional privileged accounts
const SYSTEM_ACCOUNTS = [
    {
        username: 'root',
        password: 'root',  // ❌ Terrible password
        role: 'superadmin'
    },
    {
        username: 'system',
        password: 'system123',  // ❌ Another weak password
        role: 'admin'
    },
    {
        username: 'support',
        password: 'Support2024!',
        role: 'support'
    }
];

/**
 * Initialize admin user
 */
async function initializeAdmin() {
    console.log('Creating default admin user...');
    
    // ❌ Logging plaintext password
    console.log(`Username: ${DEFAULT_ADMIN.username}`);
    console.log(`Password: ${DEFAULT_ADMIN.password}`);
    console.log(`Email: ${DEFAULT_ADMIN.email}`);
    
    const hashedPassword = await bcrypt.hash(DEFAULT_ADMIN.password, 10);
    
    // Create admin user in database
    // (Database creation code here)
    
    return DEFAULT_ADMIN;
}

/**
 * Admin API key for automation
 */
// ❌ Hardcoded admin API key
const ADMIN_API_KEY = 'admin_api_key_xyz789abc123_this_should_be_secret';

/**
 * Master reset key (for emergency access)
 */
// ❌ Emergency backdoor credentials
const MASTER_RESET = {
    key: 'master-reset-key-emergency-access-12345',
    password: 'EmergencyP@ss2024'
};

module.exports = {
    initializeAdmin,
    DEFAULT_ADMIN,
    SYSTEM_ACCOUNTS,
    ADMIN_API_KEY,
    MASTER_RESET
};
