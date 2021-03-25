import sqlDB from './sqldb.js';

const requestSave = (bodyNFE, card) => {
    let array;
    var products = [];
    const regexNFEDataName = RegExp('(\\d{2})\\D(\\d{2})\\D(\\d{4}).*?-2.*?>N.*?l<.*?n>(.*?[^<]+).*?>N.*?a<.*?n>(.*?[^<]+).*R-C.*?-a.*?>(.*?[^<]+)','g');
    let arrayDataName = regexNFEDataName.exec(bodyNFE);
    const regexNFE = RegExp('v-n.*?n>(.*?[^<]+).*?-d.*?n>(.*?[^<]+).*?-q.*?n>(.*?[^<]+).*?-u.*?n>(.*?[^<]+).*?-v.*?n>(.*?[^<]+)','g');
    while ((array = regexNFE.exec(bodyNFE)) !== null) {
        products.push(
            '(NULL,'+
            `'${array[2].split("KG").join("").trim().replace(/\s+/g, " ")}',`+
            `${parseFloat(array[3].replace(",", "."))},`+
            `'${array[4]}',`+ 
            `${parseFloat(array[5].replace(",", "."))},`+
            `'${arrayDataName[3] + arrayDataName[2] + arrayDataName[1]}',`+
            `'${arrayDataName[4]}',`+
            `'${arrayDataName[5]}',`+
            `'${arrayDataName[6]}',`+
            `'${card.toUpperCase()}')`
        );
}
let sql = `INSERT INTO depot VALUES ${products}`;
sqlDB(sql);
sql = `INSERT INTO history VALUES ${products}`;
sqlDB(sql);
}

export default requestSave;