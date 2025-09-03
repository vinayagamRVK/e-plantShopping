import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, addItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    // Access the Redux store to retrieve and display the total quantity of items currently in the cart
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        if (onContinueShopping) {
            onContinueShopping(e);
        }
    };

    // Use the updateQuantity action to change how many items are in the cart (increment)
    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    // Use the updateQuantity action to change how many items are in the cart (decrement)
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            // Use the removeItem action to delete an item completely from the cart
            dispatch(removeItem(item.name));
        }
    };

    // Use the removeItem action to delete an item completely from the cart
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    // Use the addItem action to add a new product to the cart
    const handleAddMore = (item) => {
        dispatch(addItem(item));
    };

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
        return (item.price * item.quantity).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">${item.price}</div>
                            <div className="cart-item-quantity">
                                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                            <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
                <br />
                <button className="get-started-button1">Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;