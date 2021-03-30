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

const AddNFC = () => {
    return (
        <div className='AddNFC'>
            <input id='urlNFC' type='text' size='26' />
            <input id='cardNFC' type='text' size='4' />
            <div id='btnNFC' onClick={() => sendURL()}>Add</div>
        </div>
    )    
};

export default AddNFC;