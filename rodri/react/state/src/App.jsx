import React from 'react';

import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';

import './styles/App.css';

function App() {
    return <div className="App">
        <UseState name="Use State"/>
        <ClassState name="Class State"/>
    </div>;
}

export default App;
