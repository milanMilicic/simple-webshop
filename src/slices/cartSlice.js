import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems: []};

const addDecimals = num => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existItem = state.cartItems.find(x => x.id === item.id);

            if(existItem){  // ako item postoji
                state.cartItems = state.cartItems.map(x => x.id === existItem.id ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item];
            }

            //Calculate price
            const itemsPrice = state.cartItems.reduce((sum, item) => {
                return sum + item.price * item.qty;
            }, 0);

            state.itemsPrice = addDecimals(itemsPrice);

            localStorage.setItem('cart', JSON.stringify(state));
        }
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;