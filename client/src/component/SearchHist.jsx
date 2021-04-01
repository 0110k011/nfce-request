import React , { useState } from 'react';

import MMMHist from './MMMHist.jsx';
import SearchList from './SearchList';

const SearchHist = (props) => {
    const { histData } = props;
    const [search, setSearch] = useState('');

    function searchString(strdp, str) {
        var res = str.toLowerCase().split(' ');
        var result = strdp.toLowerCase().includes(str.toLowerCase());
        if (res.length > 1) {
            for (let i=0; i < res.length; i++) {
                result = strdp.toLowerCase().includes(res[i].replace(/#.*/g, '').toLowerCase());
                if (!result || (res[i].includes('#') && strdp.toLowerCase().includes(res[i].replace(/#/g, '').toLowerCase()))) return false;
            };
        };
        return result;
    }

    function searchFilter(dp) {
        var dataArray = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        var dataMes = dp.data.slice(0,10).replace(/-\d{2}-/g, '-' + dataArray[dp.data.slice(6,7)-1] + '-');
        var str = `${dp.produto} ${dp.und} ${dataMes} ${dp.card}`;
        if (search === '') return '';
        else if (searchString(str,search)) return dp;
    }

    function searchMap(dp, key) {
        return ({
                produto: dp.produto,
                preco: dp.preco,
                und: dp.und,
                qnt: dp.qnt
            })
    }

    var mapM = histData.filter(searchFilter).map(searchMap);

    return (
        <div className='ter'>
            <div>
                <input id='inSearch' type='text' placeholder='Pesquisar...' size='16' onChange={(event) => {
                    setSearch(event.target.value);
                }} />
            </div>
            {search && (<MMMHist mmm={mapM} />)}
            <div className='search-table'>{histData.filter(searchFilter).map((dp, key) => (
                    <SearchList key={key} dp={dp} />
                ))}
            </div>
        </div>
    )
};

export default SearchHist;