import React from 'react';

import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';
import { UseReducer } from './components/UseReducer';

import './styles/App.css';

function App() {
    return <div className="App">
        <UseState name="Use State"/>
        <ClassState name="Class State"/>
        <UseReducer name="Use Reducer"/>
    </div>;
}

export default App;
