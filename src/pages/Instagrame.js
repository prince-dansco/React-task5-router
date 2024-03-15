import React from "react";
import { Link, useParams } from "react-router-dom";
import UseFetch from "../components/useFetch";

const Instagrame = () => {
  const { id } = useParams();
  const { error, isLoading, data } = UseFetch(
    "https://fakestoreapi.com/products/" + id
  );

  return (
    <div>
      {isLoading && <h2>loading...</h2>}
      {error && <h2>{error}</h2>}
      {data && (
        <article className="details">
          <img src={data.image} alt="" />
          <div className="detail-flow">
            <h1>Title: {data.title}</h1>
            <p> Price: {data.price}</p>
            <p>
              <b>The Description:</b> {data.description}
            </p>
            <strong>
              <b>The category:</b> {data.category}
            </strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              sunt, aut fugit iusto sint consectetur officia, odio cumque alias
              deleniti at eligendi enim ab porro dolor! Quis illo molestias
              ullam officiis a hic possimus porro neque omnis excepturi beatae
              minus aliquam dolorum dolores harum quam, doloribus, commodi nam
              eius error.
            </p>
            <p>
              back to home page <Link to="/">-Homepage</Link>
            </p>
          </div>
        </article>
      )}
    </div>
  );
};

export default Instagrame;
