import React , { useState } from 'react';

const SearchHist = (props) => {
    const { histData } = props;
    const [search, setSearch] = useState('');

    function searchFilter(dp) {
        if (search === '') {
            return '';
        } else if (dp.produto.toLowerCase().includes(search.toLowerCase())) {
            return dp;
        }
    }

    function searchMap(dp, key) {
        return (
            {
                produto: dp.produto,
                preco: dp.preco,
                und: dp.und,
                qnt: dp.qnt
            }
        )
    }

    function medMaxMin(mmm) {
        let arr = [];
        let sum = 0;
        for (let i = 0; i < mmm.length; i++) {
            if (mmm[i].und === 'KG') {
                arr.push(mmm[i].preco/mmm[i].qnt);
                sum += (mmm[i].preco/mmm[i].qnt);
            } else {
                arr.push(mmm[i].preco);
                sum =+ mmm[i].preco;
            }
        }
        return `Min: ${Math.min(...arr).toFixed(2)} Max: ${Math.max(...arr).toFixed(2)} Média: ${(sum/mmm.length).toFixed(2)}`;
    }

    var mapM = histData.filter(searchFilter).map(searchMap);

    return (
        <div id='terceira'>
            <input type='text' placeholder='Search...' onChange={(event) => {
                setSearch(event.target.value);
            }} />
            {search && (<h3>{medMaxMin(mapM)}</h3>)}
            <div>{histData.filter(searchFilter).map((dp, key) => (
                    <div key={key}>
                        <p>{dp.produto} {dp.qnt} {dp.und} {dp.preco} {dp.fantasia}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SearchHist;