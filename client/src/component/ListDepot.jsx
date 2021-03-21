import React from 'react';
import axios from 'axios';

const delId = (id) => {
    var row = document.getElementById(id);
    row.style.display = 'none';
    axios.post('http://192.168.100.2:9000/delid', { id });
};

const ListDepot = (props) => {
    const { dp: { id, produto, qnt, und, preco } } = props;
    return (
        <div className='row' id={id}>
            <div className='prod'>{produto}</div>
            <div className='qt'>{qnt}</div>
            <div className='un'>{und}</div>
            <div className='value'>{preco}</div>
            <div className='del' onClick={() => delId(id)}>x</div>
        </div>
    )
}

export default ListDepot;