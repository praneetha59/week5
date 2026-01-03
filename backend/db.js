// File: db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    // Docker uses 'postgres', your local uses 'postgres'
    user: process.env.DB_USER || 'postgres',

    // ✅ CRITICAL FIX: 
    // Docker provides 'database' (the service name), Local falls back to 'localhost'
    host: process.env.DB_HOST || 'localhost',

    // Docker uses 'saas_db', your local uses 'saas_application'
    database: process.env.DB_NAME || 'saas_application',

    // Docker uses 'postgres', your local uses '1234'
    password: process.env.DB_PASSWORD || '1234',

    port: process.env.DB_PORT || 5432,
});

module.exports = pool;