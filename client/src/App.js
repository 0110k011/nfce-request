import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GetDepot from './component/GetDepot.jsx';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/' children={<GetDepot />} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
