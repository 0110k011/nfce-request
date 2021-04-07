import express from 'express';
import cors from 'cors';
import sqlDB from './app/sqldb.js';
import saveDB from './app/savedb.js';
import requestSave from './app/requestSave.js'

var corsOptions = {
    origin: ['http://192.168.100.2:3000', "http://localhost:3000"],
    optionsSuccessStatus: 200
};
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.post('/addnfc', (req,res) => {
    saveDB(req.body.url, req.body.card);
});

app.post('/addmanual', (req,res) => {
    requestSave(req.body.prod, req.body.card);
});

app.post('/delid', (req,res) => {
    let sql = `DELETE FROM depot WHERE id IN (${req.body.id.replace(',', '')})`;
    sqlDB(sql);
    console.log(`id(s) ${req.body.id} deletado(s)!`)
});

app.get('/depot', (req, res) => {
    let sql = 'SELECT * FROM depot';
    sqlDB(sql).then( result => res.send(result));
});

app.get('/history', (req, res) => {
    let sql = 'SELECT * FROM history';
    sqlDB(sql).then( result => res.send(result));
});

app.listen('9000', () => console.log('Server ON port 9000...'));