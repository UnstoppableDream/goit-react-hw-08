import {  createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, editContact, fetchContacts,} from "./operations";
import { selectContacts } from "./selectors";
import { selectFilter } from "../filters/selectors";
import { logout } from "../auth/operations";

const handlePending = (state)=>{
  state.isLoading = true;
}

const handleRejected= (state, action)=>{
  state.isLoading = false;
  state.error = action.payload
}

const contactSlice = createSlice({
  name:'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentContact: null,
  },
  reducers: {
    changeCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },   
},
extraReducers: (builder)=>{
builder 
.addCase(fetchContacts.pending, handlePending)
.addCase(fetchContacts.fulfilled, (state, action)=>{
  state.isLoading = false;
  state.error = false;
  state.items = action.payload;
})
.addCase(fetchContacts.rejected, handleRejected)
.addCase(addContact.pending, handlePending)
.addCase(addContact.fulfilled, (state, action)=>{
  state.isLoading = false;
  state.error = false;
  state.items.push(action.payload)
})
.addCase(addContact.rejected, handleRejected)
.addCase(deleteContact.pending, handlePending)
.addCase(deleteContact.fulfilled, (state, action)=>{
state.isLoading = false;
state.error = false;
const index = state.items.findIndex((contact)=> contact.id === action.payload.id);
state.items.splice(index,1)
})
.addCase(deleteContact.rejected, handleRejected)

.addCase(editContact.pending, handlePending)
.addCase(editContact.fulfilled, (state, action) => {
  state.isLoading = false;
  state.error = false;
  state.items = state.items.map((item) =>
    item.id === state.currentContact.id ? action.payload : item
  );
  state.currentContact = null;
})
.addCase(editContact.rejected, handleRejected)
.addCase(logout.fulfilled, (state) => {
  state.items = [];
  state.isLoading = false;
  state.error = null;
});
}

})

export const contactsReducer = contactSlice.reducer;

export const { changeCurrentContact } = contactSlice.actions;