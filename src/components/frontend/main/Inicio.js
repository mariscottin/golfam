import React, {useState} from 'react';
import AddPost from './AddPost';
import Posts from './Posts';
import './Main.css';

const Inicio = (props)=> {

    return(
        <div>
            <AddPost handleAddPost={props.handleAddPost} currentUser={props.currentUser}/>
            <Posts posts={props.posts} handleLike={props.handleLike}/>
        </div>
    )
}

export default Inicio;