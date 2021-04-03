import express from 'express';
import cors from 'cors';
import sqlDB from './app/sqldb.js';
import saveDB from './app/savedb.js';

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
    let sql = 'INSERT INTO history VALUES (NULL,'+
    `'${req.body.prod.toUpperCase()}',`+
    `${parseFloat(req.body.qnt)},`+
    `'${req.body.und.toUpperCase()}',`+ 
    `${parseFloat(req.body.preco.replace(",", "."))},`+
    `'${req.body.data}',`+
    `'${req.body.social.toUpperCase()}',`+
    `'${req.body.social.toUpperCase()}',`+
    `'ENTRADA MANUAL',`+
    `'${req.body.card.toUpperCase()}')`
    sqlDB(sql);
});

app.post('/delid', (req,res) => {
    let sql = `DELETE FROM depot WHERE id=${req.body.id}`;
    sqlDB(sql);
    console.log(`id ${req.body.id} deletado!`)
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