import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    jobdata:[],
}
const jobSlice = createSlice({
    name: "jobdata",
    initialState,
    reducers: {
        setJobs: (state,action) => {
            state.jobs=action.payload;
        },
    }
})

export const {setJobs} =jobSlice.actions;
export default jobSlice.reducer;