import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity:0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({ id: newItem.id, title: newItem.title, price: newItem.price, description: newItem.description, quantity:1 })
            }
            else {
                existingItem.quantity++;
                existingItem.price = existingItem.price + newItem.price;
            }
        }
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;