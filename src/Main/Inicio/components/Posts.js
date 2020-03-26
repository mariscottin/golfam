import React from 'react';
import Post from './Post';

import './Posts.css';


const Posts = ({posts, handleLike, currentUser})=> {
    return(
        <div className="posts__container">
            {posts.map(post =>{
                return(
                    <Post post={post} key={post.id} handleLike={handleLike} currentUser={currentUser}/>
                )
            })}
        </div>
    )
}

export default Posts;