import { createSlice } from '@reduxjs/toolkit'

export const allProductsSlice = createSlice({
    name:"AllProducts",
    initialState:{
        allProducts:[],
        selectedCard:""
    },
    reducers: {
        isSelected: (state, action)=> {
            state.selectedCard = action.payload;
        },
        loadAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
    }
}); 

export const { isSelected, loadAllProducts } = allProductsSlice.actions;

export default allProductsSlice.reducer;