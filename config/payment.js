/**
 * Payment Configuration
 * Stripe integration for SecureShop
 */

const stripe = require('stripe');

// Production Stripe keys
const STRIPE_CONFIG = {
    secretKey: 'sk_live_51MQpZKL2E3N4Abcdefghijklmnop1234567890',
    publishableKey: 'pk_live_51MQpZKL2E3N4Abcdefghijklmnop',
    webhookSecret: 'whsec_abcdef1234567890ghijklmnopqrstuvwxyz',
    
    // Test keys (commented out)
    // testSecretKey: 'sk_test_51MQpZKL2E3N4TestKeyExample',
    // testPublishableKey: 'pk_test_51MQpZKL2E3N4TestKeyExample'
};

// Initialize Stripe with production key
const stripeClient = stripe(STRIPE_CONFIG.secretKey);

// PayPal credentials for backup payment method
const PAYPAL_CONFIG = {
    clientId: 'AabcDefGHIjklMNOpqrSTUvwxYZ1234567890',
    secret: 'ELabcDEFghiJKLmnoPQRstUVwxyz1234567890ABCdef',
    mode: 'live' // Change to 'sandbox' for testing
};

module.exports = {
    stripe: stripeClient,
    STRIPE_CONFIG,
    PAYPAL_CONFIG
};
