import React from 'react';
import Post from './Post';

import '../Inicio.css';


const Posts = ({posts, handleLike, currentUser})=> {
    return(
        <div className="Main-all-posts">
            {posts.map(post =>{
                return(
                    <Post post={post} key={post.id} handleLike={handleLike} currentUser={currentUser}/>
                )
            })}
        </div>
    )
}

export default Posts;