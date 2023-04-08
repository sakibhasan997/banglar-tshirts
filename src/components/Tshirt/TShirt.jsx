import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <div className="t-details">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button onClick={()=>handleAddToCart(tshirt)} >Buy now</button>
            </div>
        </div>
    );
};

export default TShirt;