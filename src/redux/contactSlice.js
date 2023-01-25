import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [
            // {
            //     id: '',
            //     name: '',
            //     number: ''
            // }
        ],
    },
    reducers: {
        addContact (state, action) {
            console.log(action.payload)
            state.contacts.push(action.payload)
        
            },
    //    
        deleteContact (state, action) {
            console.log(action.payload)
            const index = state.contacts.findIndex(task => task.id === action.payload);
      state.contacts.splice(index, 1);
        },
       
    }     
})

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;