import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    // host: process.env.DB_HOST,
    host: '127.0.0.1',//'postgresdb',
    user: 'postgres',
    // password: process.env.POSTGRES_PASSWORD,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432
});

async function useDB(sql){
    const conn = await pool.connect();
    try {
        const res = await conn.query(sql);
        return res;
    } catch (err) {
        throw err;
    } finally {
        conn.release();    
    }
}

const sqlDB = (sql) => {
    return useDB(sql);
}

export default sqlDB;
