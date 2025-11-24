// Database Configuration
// DO NOT commit sensitive credentials!

const config = {
    development: {
        host: 'localhost',
        port: 5432,
        database: 'secureshop_dev',
        username: 'devuser',
        password: 'devpass123'
    },
    production: {
        host: 'prod-db.secureshop.internal',
        port: 5432,
        database: 'secureshop_prod',
        username: 'admin',
        password: 'Pr0duct!onDB_2024',  // ❌ Hardcoded production password!
        ssl: true,
        pool: {
            min: 2,
            max: 10
        }
    },
    // Backup connection string for emergency access
    backup: 'postgresql://superuser:SuperU$erP@ss2024@backup-db.internal:5432/secureshop_backup'
};

// Production database URL for quick access
const PROD_DB_URL = "postgresql://admin:Pr0duct!onDB_2024@prod-db.secureshop.internal:5432/secureshop_prod";

module.exports = config;
