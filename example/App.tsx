import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import { Form } from './Form';
ReactDOM.render(
    <React.StrictMode>
        <div
            style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div style={{ width: 1000, display: 'flex', minHeight: 500 }}>
                <Form />
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root'),
);
