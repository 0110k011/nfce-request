import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ListDepot from './GetDepot.jsx';

const GetDepot = () => {
    const [depot, setDepot] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            const responseData = res.data;
            setDepot(responseData);
        })
    }, []);

    return (
        <>
            {depot && (
                <>
                    {depot.map((dp) => (
                        <ListDepot key={dp.id} dp={dp} />
                    ))}
                    <p>teste</p>
                </>
            )}
        </>
    )
}

export default GetDepot;