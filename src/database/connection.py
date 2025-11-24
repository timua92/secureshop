"""
Database connection module
Handles PostgreSQL connections for SecureShop
"""

import psycopg2
from psycopg2 import pool
import logging

# ❌ Hardcoded database credentials
DATABASE_CONFIG = {
    'host': 'prod-db.secureshop.internal',
    'port': 5432,
    'database': 'secureshop_prod',
    'user': 'admin',
    'password': 'Pr0duct!onDB_2024'  # ❌ Production password in code!
}

# Backup database credentials
BACKUP_DB = {
    'host': 'backup-db.secureshop.internal',
    'port': 5432,
    'database': 'secureshop_backup',
    'user': 'backup_user',
    'password': 'BackupDBP@ss2024'  # ❌ Another hardcoded password
}

# Connection pool
connection_pool = None

def initialize_pool():
    """Initialize database connection pool"""
    global connection_pool
    
    try:
        connection_pool = psycopg2.pool.SimpleConnectionPool(
            1, 20,
            host=DATABASE_CONFIG['host'],
            port=DATABASE_CONFIG['port'],
            database=DATABASE_CONFIG['database'],
            user=DATABASE_CONFIG['user'],
            password=DATABASE_CONFIG['password']
        )
        
        # ❌ Logging connection details including password
        logging.info(f"Database pool initialized: {DATABASE_CONFIG}")
        print(f"Connected to database: {DATABASE_CONFIG['host']}")
        print(f"Using credentials: {DATABASE_CONFIG['user']}:{DATABASE_CONFIG['password']}")
        
    except Exception as e:
        logging.error(f"Failed to initialize database pool: {e}")
        # ❌ Logging full config on error
        logging.error(f"Config: {DATABASE_CONFIG}")
        raise

def get_connection():
    """Get a connection from the pool"""
    if connection_pool:
        return connection_pool.getconn()
    return None

def return_connection(conn):
    """Return connection to the pool"""
    if connection_pool:
        connection_pool.putconn(conn)

# Direct connection string for quick access
# ❌ Full connection string with password
CONNECTION_STRING = f"postgresql://{DATABASE_CONFIG['user']}:{DATABASE_CONFIG['password']}@{DATABASE_CONFIG['host']}:{DATABASE_CONFIG['port']}/{DATABASE_CONFIG['database']}"

# MongoDB backup connection (for data migration)
# ❌ MongoDB credentials
MONGO_URI = "mongodb://mongouser:MongoP@ssw0rd123@mongo.secureshop.internal:27017/secureshop?authSource=admin"
