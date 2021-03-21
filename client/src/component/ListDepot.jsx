import React from 'react';

const ListDepot = (props) => {
    const { dp: { id, produto, qnt, und, preco } } = props;
    return (
        <div>
            <h4>{`id= ${id} prod=${produto} qt=${qnt} un=${und} valor=${preco}`}</h4>
        </div>
    )
}

export default ListDepot;