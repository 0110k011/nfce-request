import React , { useState } from 'react';

import MMMHist from './MMMHist.jsx';
import SearchList from './SearchList';

const SearchHist = (props) => {
    const { histData } = props;
    const [search, setSearch] = useState('');

    function searchFilter(dp) {
        if (search === '') return '';
        else if (dp.produto.toLowerCase().includes(search.toLowerCase())) return dp;
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
        <div>
            <div className='ter'>
                <input type='text' placeholder='Search...' onChange={(event) => {
                    setSearch(event.target.value);
                }} />
                {search && (<MMMHist mmm={mapM} />)}
            </div>
            <div className='search-table'>{histData.filter(searchFilter).map((dp, key) => (
                    <SearchList key={key} dp={dp} />
                ))}
            </div>
        </div>
    )
};

export default SearchHist;