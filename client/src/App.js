import React from 'react';
import './App.css';

import GetDepot from './component/GetDepot.jsx';
import AddNFC from './component/AddNFC.jsx';

const App = () => {
    return (
        <div className='App'>
            <AddNFC />
            <GetDepot />
        </div>
    )
};

export default App;
