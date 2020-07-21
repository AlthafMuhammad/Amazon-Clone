import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product
                    id="10001"
                    title="Samsung Galaxy S20 Ultra (Cosmic Gray, 12GB RAM, 128GB Storage)"
                    price={97999.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71cD4NUIBWL._SY550_.jpg"
                />
                <Product
                    id="10002"
                    title="Acer Aspire 3 A315-56 15.6-inch Laptop (Intel Core i5-1035G1/8GB/1TB HDD/Window 10, Home, 64Bit/Intel UHD Graphics), Black"
                    price={46990}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/810mRHoIxML._SX466_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="10003"
                    title="Mi True Wireless Earphones 2 with Balanced Sound,14 hrs Battery Life; 14.2 mm Dynamic Driver, Dual Mic Environment Noise Cancellation, One Step Pairing, Smart in-Ear Detection, LHDC Audio Codec"
                    price={3999}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/614imrpvD9L._SY450_.jpg"
                />
                <Product
                    id="10004"
                    title="Learning React: Functional Web Development with React and Redux Paperback – 1 January 2017"
                    price={925}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51imLrht6lL._SX389_BO1,204,203,200_.jpg"
                />
                <Product
                    id="10005"
                    title="I Too Had a Love Story Paperback – 6 November 2013"
                    price={179}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51JdOfIHZ9L._SX324_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="10006"
                    title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)"
                    price={63990}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SX569_.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home
