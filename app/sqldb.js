import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5
});

async function useDB(sql){
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(sql);
        return rows;
    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            await conn.end();
        }
    }
}

const sqlDB = (sql) => {
    return useDB(sql);
}

export default sqlDB;
