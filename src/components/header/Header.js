import React from 'react';
import "./Header.css";

const Header = () => {
    
    return (
        <div className='header'>
            <h1 className="app-header">
                Reject Candidates
            </h1>
            <h5 className="app-sub-header">
                36 candidates are selected
            </h5>
        </div>
    );
};

export default Header;