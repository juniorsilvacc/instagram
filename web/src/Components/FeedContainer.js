import React, {useEffect, useState} from "react";
import FeedCard from "../Components/FeedCard";

import api from '../Services/api';

function FeedContainer() {

  const [allPosts, setAllPosts] = useState(null);
  console.log(allPosts)

  useEffect(() => {
    async function getAllPosts(){
      try {
  
        const loadedPosts = await api.get('posts');
        const {data} = loadedPosts
        
        setAllPosts(data.data);
        
      } catch (err) {
        alert("Não foi possível carregar os posts");
        console.log(err)
      }
    }
    getAllPosts();
  }, []);

  return (
    <>
      {allPosts === null ? <h1 className="loading">Carregando...</h1> : null}
      {allPosts && allPosts.map(post => (
        <FeedCard 
          key={post._id}
          picture={post.picture}
        />
      ))}
    </>
  )
}

export default FeedContainer;
