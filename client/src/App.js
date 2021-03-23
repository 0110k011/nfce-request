import React from 'react';
import './App.css';

import GetDepot from './component/GetDepot.jsx';
import AddNFC from './component/AddNFC.jsx';
import GetHist from './component/GetHist.jsx';

const App = () => {
    return (
        <div className='App'>
            <AddNFC />
            <GetDepot />
            <br />
            <GetHist />
        </div>
    )
};

export default App;
