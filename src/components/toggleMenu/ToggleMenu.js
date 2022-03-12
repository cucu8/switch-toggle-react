import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedMailTemplate } from '../../store/mainSlice/mainSlice';
import mailTemplates from '../../utils/mailTemplates/mailTemplates';
import "./ToggleMenu.css";

const ToggleMenu = () => {
    const dispatch = useDispatch();
   
    return (
        <div className='toggle-menu'>
            <fieldset className='toggle-fieldset'>
                <legend className='toggle-legend'>Select a Mail Template
                </legend>
                <select
                    className='select-bar'
                    onChange={(e) => dispatch(selectedMailTemplate(e.target.value))}
                >
                    <option disabled selected >
                        Rejection Mail Sample
                    </option>
                    {
                        mailTemplates.map((template, index) =>
                            <option
                                key={index}
                                value={template.name}
                            >
                                {template.name}
                            </option>)
                    }
                </select>
            </fieldset>
        </div>
    );
};

export default ToggleMenu;