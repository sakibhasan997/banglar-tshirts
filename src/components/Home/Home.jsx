import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast('Is Already added');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }


    return (
        <div className="home-container">
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveCart={handleRemoveCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;