-- Database Initialization Script
-- SecureShop Production Database

-- Create database
CREATE DATABASE secureshop_prod;

-- Create admin user with full privileges
-- ❌ Weak password in SQL
CREATE USER admin WITH PASSWORD 'Pr0duct!onDB_2024';
GRANT ALL PRIVILEGES ON DATABASE secureshop_prod TO admin;

-- Create application user
-- ❌ Another weak password
CREATE USER app_user WITH PASSWORD 'AppUserP@ss123';
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_user;

-- Create readonly user for reporting
-- ❌ Default password
CREATE USER readonly WITH PASSWORD 'readonly';
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;

-- Create backup user
-- ❌ Predictable password
CREATE USER backup_user WITH PASSWORD 'BackupDBP@ss2024';
GRANT SELECT ON ALL TABLES IN SCHEMA public TO backup_user;

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin user
-- ❌ Default credentials in database
INSERT INTO users (email, password, role) 
VALUES ('admin@secureshop.com', 'Admin123!', 'admin');

INSERT INTO users (email, password, role)
VALUES ('superadmin@secureshop.com', 'SuperAdmin2024!', 'superadmin');

-- API Keys table
CREATE TABLE api_keys (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    key_name VARCHAR(100),
    api_key VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some API keys for testing
-- ❌ API keys stored in plaintext
INSERT INTO api_keys (user_id, key_name, api_key)
VALUES 
    (1, 'stripe_prod', 'sk_live_51MQpZKL2E3N4Abcdefghijklmnop1234567890'),
    (1, 'sendgrid_prod', 'SG.KzJ8x9YwT2abcdefghijklmnop.xyz789abcdefghijklmnopqrstuvwxyz123'),
    (1, 'aws_access', 'AKIAIOSFODNN7EXAMPLE');

-- Connection test query
-- ❌ Contains connection details in comment
-- Test with: psql -h prod-db.secureshop.internal -U admin -d secureshop_prod
-- Password: Pr0duct!onDB_2024
