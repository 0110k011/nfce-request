import React from 'react';

const delId = (id) => {
    var row = document.getElementById(id);
    let y = 0;
    if (row.style.backgroundColor === 'red') {
        let x = document.getElementsByClassName('row');
        for (let i = 0; i < x.length; i++) {
            if (x[i].style.backgroundColor === 'red') y++;
        }
        if (y <= 1) document.getElementById('commit').style.display = 'none';
        row.style.backgroundColor = '';
    } else {
        row.style.backgroundColor = 'red'
        document.getElementById('commit').style.display = 'block';
    }
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