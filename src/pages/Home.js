import React, { useEffect, useState } from 'react'
import { getDocs, collection } from "firebase/firestore";
import { db } from "../ConfiguracionFirebase";

function Home({isAuth}) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          console.log(setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
        };
        getPosts();
    });
  
      return (
        <div className='Home'>
            {postLists.map((post) => {
                return(
                    <div className='PostHome'>
                        <div className='CabezaPost'>
                            <div className='Titulo'>
                                <h1>{post.title}</h1>
                            </div>
                            
                        </div>
                        <div className='ContainerPost'> {post.postText}</div>
                        <h3>@{post.author ? post.author.name : 'Anónimo'}</h3>
                    </div>
                );
            })}
        </div>
      );
    }
    export default Home
///OmarBonilla 2022-0328///