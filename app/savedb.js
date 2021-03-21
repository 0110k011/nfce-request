import request from 'request';
import sqlDB from './sqldb.js';

function save(urlReq) {
    let url = urlReq.replace("https:","http:"); //Algumas URLs são geradas erroneamente como https, mas a "sefaz" trabalha com http
    request( //Primeira requisição. (Get Cookies)
        {
            uri: url,
            headers: {
                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
                'Connection' : 'Keep-Alive',
                'Accept' : '*/*'
            }
        },
        (error, response, body) => {
            const regexVerifNFE = RegExp('i.*?-d.*?n.*\\?.*?=(.*?[^"]+)','g');
            let verifNFE = regexVerifNFE.exec(body);                    
            if (verifNFE) { //Verifica NFE - (PENDENTE DE AUTORIZAÇÂO) 
                if ((verifNFE[1] == url.slice(57,101)) || (verifNFE[1] == url.slice(59,103))) {
                    var cookie = response.headers['set-cookie'];
                    request( //Segunda requisição. (Get Data)
                        {
                            uri: `http://nfe.sefaz.go.gov.br/nfeweb/sites/nfce/render/NFCe?chNFe=${verifNFE[1]}`,
                            headers: {
                                'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
                                'set-cookie' : cookie,
                                'cookie' : cookie 
                            }                           
                        },
                        (errorNFE, responseNFE, bodyNFE) => {
                            const regexNFE = RegExp('v-n.*?n>(.*?[^<]+).*?-d.*?n>(.*?[^<]+).*?-q.*?n>(.*?[^<]+).*?-u.*?n>(.*?[^<]+).*?-v.*?n>(.*?[^<]+)','g');
                            const regexNFEDataName = RegExp('(\\d{2})\\D(\\d{2})\\D(\\d{4}).*?-2.*?>N.*?l<.*?n>(.*?[^<]+).*?>N.*?a<.*?n>(.*?[^<]+)','g');
                            let array;
                            var products = [];
                            let arrayDataName = regexNFEDataName.exec(bodyNFE);

                            while ((array = regexNFE.exec(bodyNFE)) !== null) {
                                    products.push(
                                        '(NULL,'+
                                        `'${array[2].split("KG").join("").trim()}',`+
                                        `${parseFloat(array[3].replace(",", "."))},`+
                                        `'${array[4]}',`+ 
                                        `${parseFloat(array[5].replace(",", "."))},`+
                                        `'${arrayDataName[3] + arrayDataName[2] + arrayDataName[1]}',`+
                                        `'${arrayDataName[4]}',`+
                                        `'${arrayDataName[5]}')`
                                    );
                            }
                            let sql = `INSERT INTO depot VALUES ${products}`;
                            sqlDB(sql);
                            sql = `INSERT INTO history VALUES ${products}`;
                            sqlDB(sql);
                        }
                    );
                } else {
                    console.log(`Link quebrado: ${url}`);
                }
            } else { 
                console.log(`Erro ao tentar acessar: ${url}`);
            }              
        }
    ); 
}

const saveDB = (url) => {
    return save(url);
};

export default saveDB;