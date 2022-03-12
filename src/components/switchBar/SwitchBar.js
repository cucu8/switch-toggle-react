import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setShowToggle } from '../../store/mainSlice/mainSlice';
import "./SwitcBar.css";

const SwitchBar = () => {
    const dispatch = useDispatch();

    //! buradaki mainSlice store.js'deki maimSlicedan gelir.
    const show = useSelector(state =>state.mainSlice.showToggle)
    
    return (
        <div className='switch'>
        <div className={
                `toggle ${show
                ? "on-select"
                : "off-select"}`
            }
             onClick={() => dispatch(setShowToggle())}>
         <div className='toggle-ball' />
        </div>
        <div className='switch-header'>
                {
                    show ?
                        <span className="on">
                            Send a rejection mail
                        </span> :
                    <span className = "off">Off</span>
                }
        </div>    
        </div>
    );
};

export default SwitchBar;