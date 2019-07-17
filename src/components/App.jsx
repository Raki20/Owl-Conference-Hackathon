import React from 'react';
import Navbar from './Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>
            Hello from
                <span>
                    { ` ${process.env.HOME_URL}`}
                </span>
            </h1>
        </div>
    );
};

export default App;
