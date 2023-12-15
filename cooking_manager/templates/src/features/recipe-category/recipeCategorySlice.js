import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
}

const recipeCategorySlice = createSlice({
    name: 'recipeCategory',
    initialState,
    reducers: {},
});

export default recipeCategorySlice.reducer;