import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async(_, thunkApi)=>{
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(error.message)
        }
    }

);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkApi)=>{
        try {
            const response = await axios.post("/contacts/", contact);
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(error.message);
        }
    }
)

 export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async (id, thunkApi)=>{
        try {
           const response = await axios.delete(`/contacts/${id}`)
           return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(error.message);
        }
    }
)
export const editContact = createAsyncThunk(
    'contact/editContact',
    async ({id, name, number}, thunkApi)=>{
        try {
            const response = await axios.patch(`/contacts/${id}`, {name, number});
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(error.message)
        }
    }
)

