import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveCart }) => {

    // Conditional rendering start
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving your money </small></p>
        </div>
    }
    // Conditional rendering end

    return (
        <div className=''>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>order summary {cart.length} </h2>
            <p className={`bold ${cart.length === 3 ? 'yellow' : 'purple'}`}> SomeThins</p>
            {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={() => handleRemoveCart(tshirt._id)} >X</button> </p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na!</h3>
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary operation: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 * **/


/**
 * CONDITIONAL CSS CLASS
 * 1. use ternary
 * 2. ternary inside template string
 * */ 