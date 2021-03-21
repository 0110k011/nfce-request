import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

import ListDepot from './ListDepot.jsx';

const GetDepot = () => {
    const [depot, setDepot] = useState();
    // useEffect(() => {
    //     axios.get('http://192.168.100.2:9000/depot').then((res) => {
    //         const responseData = res.data;
    //         setDepot(responseData);
    //     })
    // }, []);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('http://192.168.100.2:9000/depot');
                setDepot(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
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