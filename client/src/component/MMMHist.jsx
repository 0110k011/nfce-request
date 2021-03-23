import React from 'react';

const MMMHist = (props) => {
    const { mmm } = props;
    let arr = [];
    let sum = 0;
    for (let i = 0; i < mmm.length; i++) {
        if (mmm[i].und === 'KG') {
            arr.push(mmm[i].preco/mmm[i].qnt);
            sum += (mmm[i].preco/mmm[i].qnt);
        } else {
            arr.push(mmm[i].preco);
            sum += mmm[i].preco;
        }
    }
    return (
        <div className='mmm'>{`Min: ${Math.min(...arr).toFixed(2)} 
            Max: ${Math.max(...arr).toFixed(2)} 
            Média: ${(sum/mmm.length).toFixed(2)}`}
        </div>);
};

export default MMMHist;