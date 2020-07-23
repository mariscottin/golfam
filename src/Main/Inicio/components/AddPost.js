import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../shared/context/auth-context';

import './AddPost.css';

const AddPost = ({ handleAddPost }) => {
    const auth = useContext(AuthContext);
    const [addPostStyle, setAddPostStyle] = useState();
    const [addPostValue, setAddPostValue] = useState();
    const [cancelButton, setCancelButton] = useState(false);
    const [submitButton, setSubmitButton] = useState(false);

    //Function to add styling to the textarea when clicked on
    const handleFocus = () => {
        setAddPostStyle({
            paddingTop: '20px',
            paddingBottom: '150px',
            paddingRight: '20px'
        });
        setCancelButton(true);
        setSubmitButton(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!addPostValue) {
            return;
        }; //Do nothing if there is nothing in the textarea
        handleAddPost(addPostValue, auth.userId); //run the function created in "Inicio" to add a post
        setAddPostValue(''); //Turn the textarea back to nothing
        setAddPostStyle(); //Remove styling from textarea
        setCancelButton(false); //Remove the close btn
        setSubmitButton(false); //Remove submit btn

    }

    //Function to trigger the close btn in the textarea. Remove styling and value from the textarea
    const handleCancel = () => {
        setAddPostValue('');
        setAddPostStyle();
        setCancelButton(false);
        setSubmitButton(false);
    }


    return (
        <div className="add-post__container">
            <div className="add-post__profile-img-container">
                <img src={`${process.env.REACT_APP_ASSET_URL}/${auth.userProfileImg}`} alt={`Foto de perfil de ${auth.userName}`} className="profile-form-img" />
            </div>
            <form className="add-post__form" onSubmit={handleSubmit}>
                <div className="textarea-position">
                    <textarea 
                        className="form-control mr-sm-2 textarea" 
                        style={addPostStyle} 
                        value={addPostValue} 
                        placeholder={`Hacé un comentario, ${auth.userName}`}
                        onChange={(e) => setAddPostValue(e.target.value)} 
                        onFocus={handleFocus}>
                    </textarea>
                    {
                     cancelButton &&
                        <div className="cancel-post-btn">
                            <FontAwesomeIcon className="close-post-icon" onClick={handleCancel} icon={faTimesCircle} />
                        </div>
                    }
                </div>
                { submitButton && 
                <div className="add-post__submit-btn-container">
                    <button className="btn add-post__submit-btn" type="submit">Comentar</button>
                </div>
                }
            </form>
        </div>
    )
}

export default AddPost;