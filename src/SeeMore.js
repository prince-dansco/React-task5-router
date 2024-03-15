import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SeeMore = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setItems(res.data.slice(9, 15));
      })
      .catch((error) => {
        console.log("Error fetching items:", error);
      });
  }, []);

  return (
    <div>
      <div className="seemore-container">
        {items.map((item) => (
          // <Link to={`/Instagrame/${item.image}`} key={item.id}>
          <div className="seemore-details" key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>

          //  </Link>
        ))}
      </div>
    </div>
  );
};

export default SeeMore;
