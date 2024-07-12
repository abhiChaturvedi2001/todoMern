import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "taskManager",
    initialState: {
        toggle: false
    },
    reducers: {
        handleToggleByTrue: (state) => {
            state.toggle = true
        },
        handleToggleByFalse: (state) => {
            state.toggle = false
        }
    }
})

export const { handleToggleByTrue, handleToggleByFalse } = todoSlice.actions
export default todoSlice.reducer