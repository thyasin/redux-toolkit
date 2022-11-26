import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "0", name: "Kevser Çevik"},
    {id: "1", name: "Taha Yasin Çevik"},
    {id: "2", name: "Kadir Çevik"},
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;