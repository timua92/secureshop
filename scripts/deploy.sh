#!/bin/bash

# SecureShop Deployment Script
# Deploys application to production

set -e

echo "Starting deployment to production..."

# ❌ Hardcoded credentials in deployment script
export DATABASE_URL="postgresql://admin:Pr0duct!onDB_2024@prod-db.secureshop.internal:5432/secureshop_prod"
export AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
export STRIPE_SECRET_KEY="sk_live_51MQpZKL2E3N4Abcdefghijklmnop1234567890"

# ❌ SSH private key path
SSH_KEY="/home/deploy/.ssh/prod_deploy_key"
SERVER="deploy@prod-server.secureshop.com"

# Build application
echo "Building application..."
npm run build

# Sync to S3
echo "Syncing to S3..."
aws s3 sync ./build s3://secureshop-production --delete

# Deploy to server
echo "Deploying to production server..."
ssh -i $SSH_KEY $SERVER << 'EOF'
    cd /var/www/secureshop
    git pull origin main
    npm install --production
    # ❌ Restart with production password
    echo "Restarting with password: Pr0duct!onDB_2024"
    pm2 restart secureshop
EOF

# Notify Slack
# ❌ Slack webhook in script
curl -X POST https://hooks.slack.com/services/T01ABC123/B01DEF456/xyz789abcdefghijklmnopqr \
  -H 'Content-Type: application/json' \
  -d '{"text":"Deployment completed successfully"}'

# ❌ Logging credentials
echo "Deployment complete!"
echo "Database: $DATABASE_URL"
echo "AWS Key: $AWS_ACCESS_KEY_ID"

# Database backup
# ❌ Backup credentials
PGPASSWORD="BackupDBP@ss2024" pg_dump -h backup-db.internal -U backup_user secureshop_backup > backup.sql

echo "✅ Deployment finished"
