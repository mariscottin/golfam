import React, { useState, useContext, useEffect } from 'react';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComments, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as farThumbsUp, faComment } from '@fortawesome/free-regular-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactLoading from 'react-loading';
import { AuthContext } from '../../../shared/context/auth-context';
import './Post.css';


const Post = ({ post, handleLike }) => {
    const auth = useContext(AuthContext);
    const [commentsArray, setcommentsArray] = useState(post.comments);
    const [comments, setComments] = useState(false);
    const [likes, setLikes] = useState(post.likes.length)
    const [profileImg] = useState(`${process.env.REACT_APP_ASSET_URL}/${post.creator.profileImg}`);
    const [commentDisplay, setCommentDisplay] = useState(false);
    const [isLiked, setIsLiked] = useState();
    const [likesArray, setLikesArray] = useState();
    const [showLikesModal, setShowLikesModal] = useState(false);
    const [commentInput, setCommentInput] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [commentLoading, setCommentLoading] = useState(false);

    const toggleComments = () => {
        if (!comments) {
            setComments(true);
        } else {
            setComments(false);
        }
    }

    const toggleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
            handleLike(post.id, -1);
            setIsLiked(false);
        } else {
            setLikes(likes + 1);
            handleLike(post.id, 1);
            setIsLiked(true);
        }
    }

    const toggleCommentDisplay = () => {
        !commentDisplay ? setCommentDisplay(true) : setCommentDisplay(false);
    }

    const handleLikesClick = async () => {
        if (post.likes.length > 0) {
            setIsLoading(true);
            setShowLikesModal(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/likes/${post.id}`);
                const responseData = await response.json();
                setLikesArray(responseData.users);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        }
    }

    const handleCommentSubmit = async () => {
        setCommentLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/comment/${post.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                },
                body: JSON.stringify({
                    userId: auth.userId,
                    body: commentInput
                })
            });
            const responseData = await response.json();
            setcommentsArray(state => [responseData, ...state]);
            setComments(true);
            if (!response.ok) {
                throw new Error(responseData.message);
            }

        } catch (err) {
            console.log(err);
        }
        setCommentLoading(false);
        setCommentInput('');
    }

    const handleCloseLikesModal = () => setShowLikesModal(false);

    useEffect(() => {
        const checkIfLiked = () => {
            if (post.likes.indexOf(auth.userId) !== -1) {
                setIsLiked(true);
            } else {
                setIsLiked(false);
            }
        }

        const sortComments = () => {
            //SORT COMMENTS BY DATE --> DESCENDING
            commentsArray.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
            })
        }

        sortComments();
        checkIfLiked();
    }, [auth.userId, post.likes, commentsArray])

    return (
        <React.Fragment>
            {showLikesModal &&
                <Modal show={showLikesModal} onHide={handleCloseLikesModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Likes</Modal.Title>
                    </Modal.Header>
                    {isLoading &&
                        <div className="fixture-loading-spinner__container">
                            <ReactLoading type={'spin'} color={'#5a945a'} height={'10%'} width={'10%'} />
                        </div>
                    }
                    {(!isLoading && likesArray) &&
                        <Modal.Body>
                            <div className="post-likes-list">
                                {likesArray.map(user => {
                                    return (
                                        <Link to={`/perfil/${user.id}`} key={user.id}>
                                            <img src={`${process.env.REACT_APP_ASSET_URL}/${user.profileImg}`} alt={`${user.name} foto`} />
                                            <div>{user.name} {user.lastName}</div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </Modal.Body>
                    }
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseLikesModal}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
            <div className="post__container">
                <div className="post-header">
                    <Link to={`/perfil/${post.creator.id}`} className="post-user" href="#"><img src={profileImg} alt="profile-pic" className="post-profile-pic" />{post.creator.name} {post.creator.lastName}</Link>
                    <p className="post-date-time">{post.date.substring(0, 22)}</p>
                </div>
                <hr />
                <div className="post-body">
                    <p>
                        {post.body}
                    </p>
                    <p className="likes-comments">
                        <span className="likes" onClick={handleLikesClick}><FontAwesomeIcon icon={faThumbsUp} /> {likes}</span>
                        <span className="comments" onClick={toggleComments}><FontAwesomeIcon icon={faComments} /> {commentsArray.length}</span>
                    </p>
                </div>
                <hr />
                <div className="post-footer">
                    <div className="post__like-comment">
                        <div onClick={toggleLike} className={`like-comment__btn ${isLiked && 'liked'}`}>
                            {isLiked ?
                                <div>
                                    <FontAwesomeIcon icon={farThumbsUp} /> Me gustó
                            </div>
                                :
                                <div>
                                    <FontAwesomeIcon icon={farThumbsUp} /> Me gusta
                            </div>
                            }
                        </div>
                        <div onClick={toggleCommentDisplay} className="like-comment__btn">
                            <div >
                                <FontAwesomeIcon icon={faComment} /> Comentar
                            </div>
                        </div>

                    </div>
                    <hr />
                    {commentDisplay &&
                        <div className="leave-comment">
                            <textarea
                                type="text"
                                className="form-control mr-1"
                                placeholder="Dejale un comentario..."
                                value={commentInput}
                                onChange={(e) => setCommentInput(e.target.value)}
                                disabled = {commentLoading ? true : false}
                            >
                            </textarea>
                            {commentLoading &&
                                <div className="comment-loading-spinner__container">
                                    <ReactLoading type={'spin'} color={'#5a945a'} />
                                </div>
                            }
                            {!commentLoading &&
                                <FontAwesomeIcon
                                    className="navbar-icon"
                                    icon={faArrowAltCircleRight}
                                    onClick={handleCommentSubmit}
                                />
                            }
                        </div>
                    }
                    {
                        (commentsArray.length > 0 && comments) &&
                        <div className="comments__container">
                            {
                                commentsArray.map(comment => {
                                    return (
                                        <div key={comment.id} className="comment">
                                            <Comment comment={comment} />
                                        </div>
                                    )
                                })
                                
                            }
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Post;