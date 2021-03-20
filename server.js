import express from 'express';
import cors from 'cors';
import sqlDB from './app/sqldb.js';
import saveDB from './app/savedb.js';

var depotSQL;
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.post('/teste', (req,res) => {
    let sql;
    switch (req.body.request) {
        case 0:
            sql = `DELETE FROM depot WHERE id=${req.body.id}`;
            sqlDB(sql);
        break;
        case '1':
            saveDB(req.body.url);
        break;
        default:
            console.log('Error!');
    }
});

app.get('/depot', (req, res) => {
    // let sql = 'SELECT * FROM depot';
    // sqlDB(sql).then( result => depotSQL = result );
    res.send([{id: 1, produto: "EXTR TOMATE PREDILECTA 300GR", qnt: 1, und: "kfa", preco: 1.95}]);
});

app.listen('9000', () => console.log('Server ON port 9000...'));