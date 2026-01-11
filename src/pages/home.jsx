import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Food from "../media/food-home.png";
import FoodDesc from "../media/describe.png";
import Navbar from "../components/navbar.jsx";

function Home() {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [counts, setCounts] = useState({});
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url =
          category === "all"
            ? "https://free-food-menus-api-two.vercel.app/best-foods"
            : `https://free-food-menus-api-two.vercel.app/${category}`;

        const res = await fetch(url);
        const data = await res.json();


        const filtered = data.filter(item => item.img);

        setProducts(filtered);
        setPage(1);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);


  const increase = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const decrease = (id) => {
    setCounts(prev => {
      const newCount = (prev[id] || 0) - 1;
      if (newCount <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: newCount };
    });
  };

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

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
<button
  className="order"
  onClick={() => {
    document
      .getElementById("menu-section")
      .scrollIntoView({ behavior: "smooth" });
  }}
>
  Order now
</button>

            <button className="reser">Reservation</button>
          </div>
        </div>

        <div className="part-image">
          <img src={Food} alt="Food" />
        </div>
      </div>


      <div className="describe">
        <div className="pic-part">
          <img src={FoodDesc} alt="Describe" />
        </div>

        <div className="desc-part">
          <h1>
            Welcome to <span>delizioso</span>
          </h1>
          <p className="desc-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Facilisis ultricies at eleifend proin.
          </p>
          <button className="learn-more">See our menu</button>
        </div>
      </div>

    
      <div id="menu-section" className="menu-section">
        <h1>Our popular menu</h1>

        <div className="menu-categories">
          <button onClick={() => setCategory("all")}>All</button>
          <button onClick={() => setCategory("burgers")}>Burgers</button>
          <button onClick={() => setCategory("pizzas")}>Pizzas</button>
          <button onClick={() => setCategory("desserts")}>Desserts</button>
          <button onClick={() => setCategory("drinks")}>Drinks</button>
        </div>

        <div className="menu-list">
          {loading && <p>Loading...</p>}

          {!loading &&
            visibleProducts.map(item => (
              <div className="menu-card" key={item.id}>
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>

                <div className="stars">⭐⭐⭐⭐⭐</div>

                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="bottom">
                  <span className="price">${item.price}</span>

                  {counts[item.id] ? (
                    <div className="counter">
                      <button onClick={() => decrease(item.id)}>-</button>
                      <span>{counts[item.id]}</span>
                      <button onClick={() => increase(item.id)}>+</button>
                    </div>
                  ) : (
                    <button
                      className="order-btn"
                      onClick={() => increase(item.id)}
                    >
                      Order now
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              &lt;
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={page === i + 1 ? "active" : ""}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
