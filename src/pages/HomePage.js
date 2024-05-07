import React from "react";
import FoodList from "../components/Foods/FoodList";

const HomePage = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner_text">
            <h1>Order, Enjoy, Repeat</h1>
          </div>
        </div>
      </section>
      <section className='foods_section'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <h2 className="section_title py-4">Category</h2>
              <ul className="list-group list-group-flush rounded-4">
                <li className="list-group-item list-group-item-action py-3 cursor-pointer">All</li>
                <li className="list-group-item list-group-item-action py-3 cursor-pointer">Vegetables</li>
                <li className="list-group-item list-group-item-action py-3 cursor-pointer">Snacks</li>
                <li className="list-group-item list-group-item-action py-3 cursor-pointer">Fats and oils</li>
                <li className="list-group-item list-group-item-action py-3 cursor-pointer">Beverages</li>
                <li className="list-group-item list-group-item-action py-3 cursor-pointer">Breads and baked goods</li>
                <li className="list-group-item list-group-item-action py-3 cursor-pointer">Pasta and noodles</li>
                <li className="list-group-item list-group-item-action py-3 cursor-pointer">Rice and grains</li>
                <li className="list-group-item list-group-item-action py-3 cursor-pointer">Soups and broths</li>
              </ul>
            </div>
            <div className="col-12 col-md-9">
              <FoodList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
