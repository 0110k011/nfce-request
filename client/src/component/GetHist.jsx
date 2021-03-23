import React, { useState, useEffect } from 'react';

import GetNodeData from './GetNodeData.jsx';
import SearchHist from './SearchHist.jsx';

const GetHist = () => {
    const [hist, setHist] = useState();

    useEffect(() => {
        GetNodeData((val) => setHist(val), 'http://192.168.100.2:9000/history');
    }, []);

    return (
        <>
            {hist && ( <SearchHist histData={hist} /> )}
        </>
    )
};

export default GetHist;