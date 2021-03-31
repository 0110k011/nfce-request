import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';

import GetDepot from './component/GetDepot.jsx';
import AddNFC from './component/AddNFC.jsx';
import GetHist from './component/GetHist.jsx';

const App = () => {
    let history = useHistory();
    return (
        <div className='App'>
            <div id='formEH'>
                <div id='btnForm' onClick={() => history.push('/')}>Estoque</div>
                <div id='btnForm' onClick={() => history.push('/histlist')}>Hist.</div>
                <div id='btnForm' onClick={() => history.push('/addnfce')}>Adic.</div>
            </div>
            <Switch>
                <Route path='/histlist'>
                    <GetHist />                    
                </Route>
                <Route path='/addnfce'>
                    <AddNFC />
                </Route>
                <Route path='/'>
                    <GetDepot />
                </Route>
            </Switch>
        </div>
    )
};

export default App;
