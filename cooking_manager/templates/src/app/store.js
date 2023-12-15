import {configureStore} from "@reduxjs/toolkit";
import recipeCategorySlice from "../features/recipe-category/recipeCategorySlice.js";


export const store = configureStore({
    reducer: {
        recipeCategory: recipeCategorySlice,
    }
})