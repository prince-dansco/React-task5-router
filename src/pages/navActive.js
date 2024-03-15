import { Link } from "react-router-dom";
import UseFetch from "../components/useFetch";

const NavActive = () => {
  const { data, isLoading, error } = UseFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div>
      {isLoading && <h2>loading...</h2>}
      {error && <h1>{error}</h1>}
      <div className="main-wrapper">
        {data.length > 0 ? (
          data.map((item) => (
            <div className="wrapper" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="sub-wrapper">
                <p>{item.title}</p>
                <Link to={`/Instagrame/${item.id}`}>
                  <button className="btn">View More</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>no data here</p>
        )}
      </div>
    </div>
  );
};

export default NavActive;
