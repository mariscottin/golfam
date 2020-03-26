import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import '../Inicio.css';
import './Comment.css';


const Comment = ({comment})=> {
    return(
        <div className="comment">
                <Link to={`perfil/${comment.user.id}`} className="comment-user"><img src={comment.user.profileImg} alt="profile-img" className="post-profile-pic"/>{comment.user.name} {comment.user.lastName}</Link>
                <p className="comment-date post-date-time">{comment.date}</p>
                <p className="comment-body">{comment.comment}</p>
                <p className="comment-likes"><FontAwesomeIcon className="navbar-icon" icon={faThumbsUp}/> {comment.likes}</p>
        </div>
    )
}

export default Comment;