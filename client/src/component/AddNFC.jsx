import React from 'react';
import axios from 'axios';

const sendURL = () => {
    var url = document.getElementById('urlNFC');
    var card = document.getElementById('cardNFC');
    if (url.value !== '' && card.value !== '') {
        axios.post('http://192.168.100.2:9000/addnfc', { url: url.value, card: card.value });
        url.value = '';
        card.value = '';
    }
};

const getData = () => {
    var date = new Date().toISOString().match(/\d{2,4}/g);
    return `${date[2]}/${date[1]}/${date[0]}`;
}

const sendForm = () => {
    var prod = document.getElementById('prod');
    var qnt = document.getElementById('qnt');
    var und = document.getElementById('und');
    var preco = document.getElementById('preco');
    var data = document.getElementById('data');
    var social = document.getElementById('social');
    var card = document.getElementById('card');
    if (prod.value && qnt.value && und.value && preco.value && data.value && social.value && card.value) {
        axios.post('http://192.168.100.2:9000/addmanual', { 
            prod: `v-nn>0<-dn>${prod.value}<-qn>${qnt.value}<-un>${und.value}<-vn>${preco.value}<`+
            `${data.value}-2>Nl<n>${social.value}<>Na<n>${social.value}<R-C-a>ENTRADA MANUAL<`, 
            card: card.value 
        });
        prod.value = '';
    }
};

const AddNFC = () => {
    return (
        <React.Fragment>
            <div className='AddNFC'>
                <input id='urlNFC' placeholder='Link...' type='text' size='22' />
                <input id='cardNFC' placeholder='Cartão...' type='text' size='6' />
                <div id='btnNFC' onClick={() => sendURL()}>Add</div>
            </div>
            <div className='AddManual'>
                <input id='prod' placeholder='Produto' type='text' size='6' />
                <input id='qnt' placeholder='Quantidade' type='text' size='6' />
                <input id='und' placeholder='Unidade' type='text' size='6' />
                <input id='preco' placeholder='Preço' type='text' size='6' />
                <input id='data' type='text' defaultValue={getData()} size='6'/>
                <input id='social' placeholder='Loja' type='text' size='6' />
                <input id='card' placeholder='Cartão...' type='text' size='6' />
                <div id='btnManual' onClick={() => sendForm()}>Add</div>
            </div>
        </React.Fragment>
    )    
};

export default AddNFC;