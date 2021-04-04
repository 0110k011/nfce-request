import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';

import ListDepot from './ListDepot.jsx';
import GetNodeData from './GetNodeData.jsx';

const commitDel = () => {
    let x = document.getElementsByClassName('row');
    let id = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.backgroundColor === 'red') {
            id += `,${x[i].id}`;
            x[i].style.display = 'none';
        }
    }
    axios.post('http://192.168.100.2:9000/delid', { id });
    document.getElementById('commit').style.display = 'none';
}

const GetDepot = () => {
    const [depot, setDepot] = useState();
    useEffect(() => {
        GetNodeData((val) => setDepot(val), 'http://192.168.100.2:9000/depot');
    }, []);

    return (
        <React.Fragment>
            {depot ? (
                <>
                <div className='table'>
                    {depot.map((dp) => (
                        <ListDepot key={dp.id} dp={dp} />
                    ))}
                </div> 
                <div id='commit' style={{display: 'none'}} onClick={() => commitDel()}>Deletar</div>
                </>)
            : <CircularProgress />}
        </React.Fragment>
    )
}

export default GetDepot;