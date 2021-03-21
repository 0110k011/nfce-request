import express from 'express';
import cors from 'cors';
import sqlDB from './app/sqldb.js';
import saveDB from './app/savedb.js';

var depotSQL;
var corsOptions = {
    origin: ['http://192.168.100.2:3000', "http://localhost:3000"],
    optionsSuccessStatus: 200
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

// app.post('/delid', (req,res) => {
//     let sql;
//     switch (req.body.request) {
//         case 0:
//             sql = `DELETE FROM depot WHERE id=${req.body.id}`;
//             //sqlDB(sql);
//             console.log(`Deletando id ${req.body.id} request = ${req.body.request}`)
//         break;
//         case '1':
//             saveDB(req.body.url);
//         break;
//         default:
//             console.log('Error!');
//     }
// });

app.post('/addnfc', (req,res) => {
    saveDB(req.body.url);
});

app.post('/delid', (req,res) => {
    let sql = `DELETE FROM depot WHERE id=${req.body.id}`;
    sqlDB(sql);
    console.log(`id ${req.body.id} deletado!`)
});

app.get('/depot', (req, res) => {
    let sql = 'SELECT * FROM depot';
    sqlDB(sql).then( result => depotSQL = result );
    res.send(depotSQL);
});

app.listen('9000', () => console.log('Server ON port 9000...'));