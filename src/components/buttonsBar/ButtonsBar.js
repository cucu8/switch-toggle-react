import React from 'react';
import { useSelector } from 'react-redux';
import { left, right } from '../../utils/icons/icons';
import "./ButtonsBar.css";

const ButtonsBar = () => {

    const mailHeader = useSelector(state => state.mainSlice.sendingMailHeader);

    const mailDescription = useSelector(state => state.mainSlice.sendingMailDescription)

    return (
        <div className='button-bar'>
            <button className='button back'>
                <span>{left}</span>
                <span>Go Back</span>
            </button>
            <button
                className='button send'
                onClick={
                    () => localStorage.setItem("data", JSON.stringify({ mailHeader, mailDescription}))
                }
            >
                <span>Send</span>
                <span>{right}</span>
            </button>               
        </div>
    );
};

export default ButtonsBar;