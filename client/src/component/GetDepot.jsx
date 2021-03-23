import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';

import ListDepot from './ListDepot.jsx';
import GetNodeData from './GetNodeData.jsx';

const GetDepot = () => {
    const [depot, setDepot] = useState();
    useEffect(() => {
        GetNodeData((val) => setDepot(val), 'http://192.168.100.2:9000/depot');
    }, []);

    return (
        <React.Fragment>
            {depot ? (
                <div className='table'>
                    {depot.map((dp) => (
                        <ListDepot key={dp.id} dp={dp} />
                    ))}
                </div> )
            : <CircularProgress />}
        </React.Fragment>
    )
}

export default GetDepot;