import React from "react";
import "../styles/home.css";
import Food from "../media/food-home.png";
import Navbar from "../components/navbar.jsx";
import FoodDesc from "../media/describe.png";
function Home() {

  return (
    <>
      <Navbar />

      <div className="home-page">
        <div className="part-text">
          <p className="head-text">Restaurant</p>
          <h1>Italian Cuisine</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sodales senectus dictum arcu sit tristique donec eget.
          </p>

          <div className="btns">
            <button className="order">Order now</button>
            <button className="reser">Reservation</button>
          </div>
        </div>

        <div className="part-image">
          <img src={Food} alt="Food" />
        </div>
      </div>
      <div className="describe">
<div className="pic-part">
  <img src={FoodDesc} alt="" />
</div>
<div className="desc-part">
  <h1>Welcome to <p>delizioso</p></h1>
  <p className='desc-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
  <button className="learn-more">See our menu</button>
</div>
      </div>

      <div className="menu-section">
<h1>Our popular menu</h1>
<div className="menu-categories">
  <button onClick={() => setCategory("All")}>All catagory</button>
  <button onClick={() => setCategory("Dinner")}>Dinner</button>
  <button onClick={() => setCategory("Lunch")}>Lunch</button>
  <button onClick={() => setCategory("Dessert")}>Dessert</button>
<button onClick={() => setCategory("Drink")}>Drink</button>
</div>

      </div>
    </>
  );
}

export default Home;
