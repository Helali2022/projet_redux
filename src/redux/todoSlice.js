import { createSlice } from '@reduxjs/toolkit'

const initialState = [{id:0,description:"First task",isdone:false},
    { id: 1, description: "Fuyuyuyyrst task", isdone: true },
    { id: 2, description: "Firbvjhhjhst task", isdone: false }]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add:(state,action)=>{
            state.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { add } = todoSlice.actions

export default todoSlice.reducer