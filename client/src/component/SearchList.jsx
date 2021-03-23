import React from 'react';

const SearchList = (props) => {
    const { dp: { data, fantasia, preco, produto, qnt, und } } = props;
    return (
        <div className='search-row'>
            <div className='search-item'>{produto}</div>
            <div className='search-item2'>{qnt}</div>
            <div className='search-item2'>{und}</div>
            <div className='search-item2'>{`R$${preco}`}</div>
            <div className='search-item'>{data.slice(0,10)}</div>
            <div className='search-item'>{fantasia}</div>
        </div>
    )
};

export default SearchList;