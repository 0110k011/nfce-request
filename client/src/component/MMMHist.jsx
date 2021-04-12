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
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return (
        <React.Fragment>
        {mmm.length > 0 ? (
                <div className='mmm'>
                    {`Mn: `}<strong title={ mmm[arr.indexOf(min)].fant }>{`${min.toFixed(2)} `}</strong>
                    {`Mx: `}<strong title={ mmm[arr.indexOf(max)].fant }>{`${max.toFixed(2)} `}</strong>
                    {`Md: `}<strong>{`${(sum/mmm.length).toFixed(2)} `}</strong>
                    {`TT: `}<strong><u>{`R$${total.toFixed(2)}`}</u></strong>
                </div>
        ) : <> </>}
        </React.Fragment>);
};

export default MMMHist;