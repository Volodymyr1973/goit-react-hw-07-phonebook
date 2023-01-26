import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://63d163083f08e4a8ff96dd04.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log(response.data)
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", contact);
        console.log(response.data)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";


// axios.defaults.baseURL = "https://63d163083f08e4a8ff96dd04.mockapi.io";
// export const fetchTasks = createAsyncThunk("contacts/fetchAll", async () => {
//   const response = await axios.get("/contacts");
//   return response.data;
// });


// import axios from "axios";
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./contactSlice";

// axios.defaults.baseURL = "https://63d163083f08e4a8ff96dd04.mockapi.io";
// export const fetchTasks = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get("/contacts");
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };