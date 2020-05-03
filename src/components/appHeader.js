import React from 'react';
import '../css/app-header.css';

const AppHeader = (props) => {
    return (
        <div className='app-header d-flex'>
            <h1>Taras Shevchenko</h1>
            <h2>{props.allPost} записей, из них понравилось {props.like}</h2>
        </div>
    )
}
export default AppHeader;