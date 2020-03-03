import React from 'react';
import Post from './Post';
import './Main.css';

const Posts = ({posts, handleLike})=> {
    return(
        <div className="Main-all-posts">
            {posts.map(post =>{
                return(
                    <Post post={post} key={post.id} handleLike={handleLike} />
                )
            })}
        </div>
    )
}

export default Posts;