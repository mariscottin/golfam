import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Comment.css';


const Comment = ({comment})=> {
    return(
        <div className="comment">
                <Link to={`perfil/${comment.userId}`} className="comment-user"><img src={`${process.env.REACT_APP_ASSET_URL}/${comment.profileImg}`} alt="profile-img" className="post-profile-pic"/>{comment.name} {comment.lastName}</Link>
                <p className="comment-date post-date-time">{comment.date}</p>
                <p className="comment-body">{comment.body}</p>
                <p className="comment-likes"><FontAwesomeIcon className="navbar-icon" icon={faThumbsUp}/> {comment.likes.length}</p>
        </div>
    )
}

export default Comment;