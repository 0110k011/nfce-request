import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: process.env.SEQ_HOST,
    user: process.env.SEQ_USER,
    password: process.env.SEQ_PW,
    database: process.env.SEQ_DB,
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
