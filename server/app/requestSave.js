import sqlDB from './sqldb.js';

const requestSave = (bodyNFE, card) => {
    let array;
    var products = [];
    let array3,array4,loopProduct;
    const regexNFEDataName = RegExp('(\\d{2})\\D(\\d{2})\\D(\\d{4}).*?-2.*?>N.*?l<.*?n>(.*?[^<]+).*?>N.*?a<.*?n>(.*?[^<]+).*R-C.*?-a.*?>(.*?[^<]+)','g');
    let arrayDataName = regexNFEDataName.exec(bodyNFE);
    const regexNFE = RegExp('v-n.*?n>(.*?)<.*?-d.*?n>(.*?)<.*?-q.*?n>(.*?)<.*?-u.*?n>(.*?)<.*?-v.*?n>(.*?)<','g');
    while ((array = regexNFE.exec(bodyNFE)) !== null) {
        array3 = array[3].replace(",", ".");
        if (parseFloat(array3) === parseInt(array3, 10)) {
            array4 = 'UN';
            loopProduct = parseInt(array3, 10);
            array3 = 1;
        } else {
            array4 = 'KG';
            loopProduct = 1;
            array3 = parseFloat(array3);
        }
        for (let i=0; i < loopProduct; i++) {
            products.push(
                '(NULL,'+
                `'${array[2].toUpperCase().split("KG").join("").trim().replace(/\s+/g, " ")}',`+
                `${array3},`+
                `'${array4}',`+ 
                `${parseFloat(array[5].replace(",", "."))/loopProduct},`+
                `'${arrayDataName[3] + arrayDataName[2] + arrayDataName[1]}',`+
                `'${arrayDataName[4].toUpperCase()}',`+
                `'${arrayDataName[5].toUpperCase()}',`+
                `'${arrayDataName[6]}',`+
                `'${card.toUpperCase()}')`
            )
        };
    }
    let sql = `INSERT INTO depot VALUES ${products}`;
    sqlDB(sql);
    sql = `INSERT INTO history VALUES ${products}`;
    sqlDB(sql);
}

export default requestSave;