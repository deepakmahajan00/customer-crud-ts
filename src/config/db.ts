import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'deep@kM84',
    database: 'node_app',
});

export default pool;