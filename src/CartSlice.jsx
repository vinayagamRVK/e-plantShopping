import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // cart starts empty
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);

      if (existingItem) {
        // if item already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // if new item, add with quantity = 1
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // remove by product name
      state.items = state.items.filter(i => i.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(i => i.name === name);

      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
