import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        price = price + product.price;
    }
    const cartStyle ={
        color:'gold',
        margin:'10px',
        padding:'10px',
        position:'fixed'
    }
    return (
        <div style={cartStyle}>
            <h1>Enroll Courses</h1>
            <h4>You have Enroled: {cart.length} Courses</h4>
            <h3>Total Price: ${price}</h3>
         </div>
    );
};

export default Cart;