import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mailTemplates from '../../utils/mailTemplates/mailTemplates';
import { sendMailHeader, sendMailDescription } from '../../store/mainSlice/mainSlice';
import "./MailBox.css";

const MailBox = () => {
    const dispatch = useDispatch();

    const mailTemplate = useSelector(
        state => state.mainSlice.mailTemplate
    )

    const sendedMailHeader = useSelector(state => state.mainSlice.sendingMailHeader);

    const sendedMailDescription = useSelector(state => state.mainSlice.sendingMailDescription);

    //bu fonksiyon ile seçecegimiz templatein initialStateleri inputlarımıza value olarak atanacaktır.
    const takeValueInputFromTemplate = () => {
        const selectedTemplate = mailTemplates.find
            (template => template.name === mailTemplate);
        dispatch(sendMailHeader(selectedTemplate.header))
        dispatch(sendMailDescription(selectedTemplate.description))
    }

    useEffect(() => {
        takeValueInputFromTemplate();
    }, [mailTemplate])


    return (
        <div className='mail-box'>
            <input
                className='mail-header-input'
                placeholder='Mail Header..'
                value={sendedMailHeader}
                onChange={
                    (e) => dispatch(sendMailHeader(e.target.value))
                }
            />
            <div className='description-header'>
                Default text tool bar
            </div>
            <textarea
                className='mail-body-textarea'
                placeholder='Mail Description..'
                value={sendedMailDescription}
                onChange={
                    (e) => dispatch(sendMailDescription(e.target.value))}
            />

        </div>
    );
};

export default MailBox;