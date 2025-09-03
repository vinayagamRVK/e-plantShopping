import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize the cart state to keep track of cart items
  },
  reducers: {
    // addItem action to add selected products to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);

      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // If new item, add with quantity = 1
        state.items.push({ ...item, quantity: 1 });
      }
    },
    
    // removeItem action to delete an item completely from the cart
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter(i => i.name !== itemName);
    },
    
    // updateQuantity action to change how many items are in the cart
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