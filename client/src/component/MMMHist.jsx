import React from 'react';

const MMMHist = (props) => {
    const { mmm } = props;
    let arr = [];
    let sum = 0;
    let total = 0;
    for (let i = 0; i < mmm.length; i++) {
        if (mmm[i].und === 'KG') {
            arr.push(mmm[i].preco/mmm[i].qnt);
            sum += (mmm[i].preco/mmm[i].qnt);
        } else {
            arr.push(mmm[i].preco);
            sum += mmm[i].preco;
        }
        total += mmm[i].preco;
    }
    return (
        <div className='mmm'>
            {`Mn: `}<strong>{`${Math.min(...arr).toFixed(2)} `}</strong>
            {`Mx: `}<strong>{`${Math.max(...arr).toFixed(2)} `}</strong>
            {`Md: `}<strong>{`${(sum/mmm.length).toFixed(2)} `}</strong>
            {`TT: `}<strong><u>{`R$${total.toFixed(2)}`}</u></strong>
        </div>);
};

export default MMMHist;