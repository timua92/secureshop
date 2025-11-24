# SecureShop API Documentation

## Authentication

All API requests require authentication using JWT tokens or API keys.

### Getting Started

1. Create an account at https://secureshop.com/register
2. Login to get your API key
3. Use the API key in the `Authorization` header

### Admin API Key

For testing purposes, you can use the admin API key:

```
admin_api_key_xyz789abc123_this_should_be_secret
```

## Database Access

For direct database queries (admin only):

**Connection String:**
```
postgresql://admin:Pr0duct!onDB_2024@prod-db.secureshop.internal:5432/secureshop_prod
```

## AWS Configuration

S3 Bucket: `secureshop-production-uploads`
Region: `eu-west-2`

**Access Keys:**
- Access Key ID: `AKIAIOSFODNN7EXAMPLE`
- Secret Access Key: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`

## Payment Integration

### Stripe

**Live Keys:**
- Publishable: `pk_live_51MQpZKL2E3N4Abcdefghijklmnop`
- Secret: `sk_live_51MQpZKL2E3N4Abcdefghijklmnop1234567890`
- Webhook Secret: `whsec_abcdef1234567890ghijklmnopqrstuvwxyz`

## Email Service

**SendGrid API Key:**
```
SG.KzJ8x9YwT2abcdefghijklmnop.xyz789abcdefghijklmnopqrstuvwxyz123
```

## Internal Services

**Payment Service:** http://10.0.1.52:3000
**User Service:** http://10.0.1.53:3000
**Admin Panel:** http://10.0.1.100:8080

## Example cURL Request

```bash
curl -X POST https://api.secureshop.com/orders \
  -H "Authorization: Bearer admin_api_key_xyz789abc123" \
  -H "Content-Type: application/json" \
  -d '{"product_id": 123, "quantity": 1}'
```

## Database Schema

Users table password: Admin123!
Database admin password: Pr0duct!onDB_2024

## Support

For API support, contact: api-support@secureshop.com
