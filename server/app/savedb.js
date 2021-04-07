import request from 'request';
import requestSave from './requestSave.js'

function save(urlReq, cardReq) {
    let url = urlReq.replace("https:","http:"); //Algumas URLs são geradas erroneamente como https, mas a "sefaz" trabalha com http
    const optionNFE = {
        uri: url,
        headers: {
            'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
            'Connection' : 'Keep-Alive',
            'Accept'     : '*/*',
            'cookie'     : ''
        }
    };
    request( //Primeira requisição. (Get Cookies)
        optionNFE,
        (error, response, body) => {
            const regexVerifNFE = RegExp('i.*?-d.*?n.*\\?.*?=(.*?[^"]+)','g');
            let verifNFE = regexVerifNFE.exec(body);                    
            if (verifNFE) { //Verifica NFE - (PENDENTE DE AUTORIZAÇÂO) 
                if ((verifNFE[1] == url.slice(57,101)) || (verifNFE[1] == url.slice(59,103))) {
                    optionNFE.headers['cookie'] = response.headers['set-cookie'];
                    optionNFE.uri = `http://nfe.sefaz.go.gov.br/nfeweb/sites/nfce/render/NFCe?chNFe=${verifNFE[1]}`
                    request( //Segunda requisição. (Get Data)
                        optionNFE,
                        (errNFE, resNFE, bodyNFE) => {                   
                            requestSave(bodyNFE, cardReq);
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

const saveDB = (url, card) => {
    return save(url, card);
};

export default saveDB;