import React from 'react';
import axios from 'axios';

const sendURL = () => {
    var url = document.getElementById('urlNFC');
    if (url.value !== '') {
        axios.post('http://192.168.100.2:9000/addnfc', { url });
        url.value = '';
    }
};

const AddNFC = () => {
    return (
        <div className='AddNFC'>
            <input id='urlNFC' type='text' size='35'/>
            <div id='btnNFC' onClick={() => sendURL()}>Add</div>
        </div>
    )    
};

export default AddNFC;