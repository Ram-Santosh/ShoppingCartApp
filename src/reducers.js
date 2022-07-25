import { createSlice } from '@reduxjs/toolkit'

export const allProductsSlice = createSlice({
    name:"AllProducts",
    initialState:{
        allProducts:[],
        selectedCard:"",
        cart: {},
        cartCount: 0
    },
    reducers: {
        isSelected: (state, action)=> {
            state.selectedCard = action.payload;
        },
        loadAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        addToCart: (state, action) => {
            state.cart = action.payload;
        },
        incCartCount: (state) => {
            state.cartCount += 1;
        }
    }
}); 

export const { isSelected, loadAllProducts, addToCart, incCartCount } = allProductsSlice.actions;

export default allProductsSlice.reducer;