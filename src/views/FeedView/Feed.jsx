import { useState, useEffect } from 'react';

import classes from './Feed.module.scss';

import NewPostForm from "../../components/Feed/NewPostForm/NewPostForm";

import Posts from "../../components/Feed/Posts/Posts";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useConfigContext } from '../../contexts/ConfigContex';



const Feed = () => {

  const [posts, setPosts] = useState([]);
  const { startLoading, stopLoading } = useConfigContext();

  //Esto se ejecuta 1 vez, después del 1er render
  useEffect(() => {
    fetchPosts();
  }, []);


  //función fetch para todos los elementos
  const fetchPosts = async () => {
    try {
      startLoading();
      //const response = await fetch("https://mapaverde-api-production.up.railway.app/api/event/");
      const { data } = await axios.get("/event");
      setPosts(data.posts);
    } catch (error) {
      toast.error("Unexpected error!");
    }finally{
      stopLoading();
    }
  }

  //Función para guardar un post en la API
  const savePost = async (title, description, image) => {
    try {
      startLoading();

      await axios.post("/event", { title, description, image });
      toast.success("Event saved!");

    } catch (error) {
      const { status } = error.response || { status: 500 };
      const msg = {
        "400": "Wrong fields",
        "404": "Not Found",
        "500": "Something went wrong!"
      }

      toast.error(msg[status.toString()] || "Unexpected error!");
    } finally {
      stopLoading();
    }
  }
  //Handler de añadir posts
  const onAddPostHandler = async (title, description, image) => {


    await savePost(title, description, image);
    fetchPosts();
  }

  return (
    <div className={classes["feed-wrapper"]}>
      {/* Formulario */}
      <NewPostForm onAddPost={onAddPostHandler} />
      {/* Main Feed */}
      <Posts posts={posts} />
    </div>
  )
}
export default Feed;