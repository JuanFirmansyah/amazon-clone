import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="13314351"
          title="AmazonBasics Nylon Braided Lightning to USB Cable - MFi Certified Apple iPhone Charger, Dark Gray,       6-Foot (2-Pack) (Durability Rated 4,000 Bends)"
          price={21.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61stA5Z9W0L._AC_SX679_.jpg"
        />
        <Product
          id="85655362"
          title="AmazonBasics 100 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
          price={23.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/715wResFL7L._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="65757751"
          title="AmazonBasics Premium Single Monitor Stand - Lift Engine Arm Mount, Aluminum - Black"
          price={116.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81vVhNmk8JL._AC_SX466_.jpg"
        />
        <Product
          id="6358862"
          title="AmazonBasics Underseat, Carry-On Rolling Travel Luggage Bag with Wheels, 14 Inches"
          price={48.02}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91qC%2BUYYwIL._AC_UX569_.jpg"
        />
        <Product
          id="12321341"
          title="AmazonBasics Kids Unicorns & Rainbows Soft, Easy-Wash Microfiber Sheet Set - Twin, Peony Pink Unicorns"
          price={14.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91g1PadIInL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="672746456"
          title="AmazonBasics Silicone, Non-Stick, Food Safe Baking Mat - Pack of 2"
          price={8.11}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81IC5%2BbWDgL._AC_SL1500_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
