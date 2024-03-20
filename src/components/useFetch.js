// import axios from "axios";
// import { useEffect, useState } from "react";

// const UseFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//    axios
//       .get(url)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((error) => {
//         setError(error.message);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [url]);

//   return {data, isLoading, error}
// };

// export default UseFetch;
