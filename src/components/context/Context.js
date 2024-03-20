import axios from 'axios';
import React, { createContext } from 'react'
import { useState } from 'react';


export const myContext = createContext();
const Context = ({children}) => {
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    const [data, setData] = useState([]);
// blog
 function savePost (post) {
    axios.get(post)
    .then((res) => {
        setIsLoading(false);
       setPosts(res.data); 
    })
    .catch((error) => {
        console.log(error);
    });
}
// single data
 function GetSingleItem (data) {
    axios.get(data)
    .then((res) => {
        setIsLoading(false);
       setData(res.data); 
    })
    .catch((error) => {
        console.log(error);
    });
}


const value = {savePost, posts, isLoading ,setIsLoading, error, setError, GetSingleItem, data}
  return (
    <myContext.Provider value={value}>
      {children}
    </myContext.Provider>
  )
}

export default Context
