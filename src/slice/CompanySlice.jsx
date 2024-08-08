import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    company: null,
    editCompany: null,
}

const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        setCompany: (state, action) => {
            state.company = action.payload
        },
        setEditCompany: (state, action) => {
            state.editCompany = action.payload
        },
        resetCompany: (state) => {
            state.company = null
            state.editCompany = null;
        },
    },
})

export const { setCompany, setEditCompany, resetCopmany } = companySlice.actions;

export default companySlice.reducer;