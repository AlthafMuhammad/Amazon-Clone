import React from 'react';
import './Product.css';
import { Button } from '@material-ui/core';

function Product({id,title,image,price,rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            
            <img src={image} alt="" />
            <Button>Add to basket</Button>
        </div>
    )
}

export default Product
