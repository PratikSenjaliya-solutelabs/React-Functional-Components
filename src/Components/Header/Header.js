import React from 'react';
import classes from './Header.module.css';

export default function Header() {
    return (
        <header className={classes.Header}>
            <div className={classes.Ps}>
                <a href="#/">
                    <h1>PS STORE</h1>
                </a>
            </div>
        </header>
    )
}
