import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "mainSlice",
    initialState: {
        showToggle: false,
        mailTemplate: "",
        sendingMailHeader: "",
        sendingMailDescription:"",
    },
    reducers: {
        setShowToggle: (state) => {
            state.showToggle = !state.showToggle
            //switch off oldugunda toggle menü seçicimizide
            //boş yapıyoruz
            if (!state.showToggle) {
                state.mailTemplate = ""
            }
        },
        selectedMailTemplate: (state, action) => {
            state.mailTemplate = action.payload;
        },
        sendMailHeader: (state, action) => {
            state.sendingMailHeader = action.payload;
        },
        sendMailDescription: (state, action) => {
            state.sendingMailDescription = action.payload;
        }, 
    }
});

export const {
    setShowToggle,
    selectedMailTemplate,
    sendMailHeader,
    sendMailDescription,
} = mainSlice.actions;

export default mainSlice.reducer