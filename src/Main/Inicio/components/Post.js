import React, { useState } from 'react';
import Comment from './Comment';
// import ProfilePicComment from '../../../../assets/img/profile.jpeg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComments, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons';

import '../Inicio.css';


const Post = ({ post, handleLike, currentUser }) => {
    const [comments, setComments] = useState(false);
    const [profileImg] = useState(post.user.profileImg);
    const [like, setLike] = useState({state: false, text: 'Me gusta'}); //I suppose this should be brought from somewhere in the DB?? Somekind of LIKES object where all my likes are listed
    const [likeStyle, setLikeStyle] = useState();

    const toggleComments = () => {
        if (!comments) {
            setComments(true);
        } else {
            setComments(false);
        }
    }

    const toggleLike = () => {
        if (!like.state) {
        setLikeStyle({
            backgroundColor: '#5a945a',
            color: '#ffffff'
        })    
        setLike({state: true, text: 'Me gustó'});
        handleLike(post.id, 1);
        }else{
            setLikeStyle();
            setLike({state: false, text: 'Me gusta'});
            handleLike(post.id, -1);
        }
    }

    return (
        <div className="Main-post">
            <div className="post-header">
                <Link to={`/perfil/${post.user.id}`} className="post-user" href="#"><img src={profileImg} alt="profile-pic" className="post-profile-pic" />{post.user.name} {post.user.lastName}</Link>
                <p className="post-date-time">{post.date}</p>
            </div>
            <hr />
            <div className="post-body">
                <p>
                    {post.body}
                </p>
                <p className="likes-comments">
                    <span className="likes"><FontAwesomeIcon icon={faThumbsUp} /> {post.likes}</span>
                    <span className="comments" onClick={toggleComments}><FontAwesomeIcon icon={faComments} /> {post.comments.length}</span>
                </p>
            </div>
            <hr />
            <div className="post-footer">
                <div onClick={toggleLike} style={likeStyle} className="like">
                    <div >
                        <FontAwesomeIcon icon={farThumbsUp} /> {like.text}
                    </div>
                </div>
                <hr />
                <div className="leave-comment">
                    <form className="form-group form-inline">
                        <img src={currentUser.profileImg} alt="profile-pic" className="post-profile-pic" />
                        <textarea type="text" className="form-control mr-1" placeholder="Dejale un comentario..."></textarea>
                        <FontAwesomeIcon className="navbar-icon" icon={faArrowAltCircleRight} />
                    </form>
                </div>
                {
                    post.comments.length > 0 ?
                        comments ?
                            <div className="Main-comments">
                                {
                                    post.comments.map(comment => {
                                        return (
                                            <div key={comment.id} className="comment">
                                                <Comment  comment={comment} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            null
                        :
                        null

                }
            </div>

        </div>
    )
}

export default Post;