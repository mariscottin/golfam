import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

const AddPost = ({ handleAddPost, currentUser }) => {

    const [addPostStyle, setAddPostStyle] = useState();
    const [addPostValue, setAddPostValue] = useState();
    const [cancelButton, setCancelButton] = useState(false);

    //Function to add styling to the textarea when clicked on
    const handleFocus = () => {
        setAddPostStyle({
            paddingTop: '20px',
            paddingBottom: '150px',
            paddingRight: '20px'
        });
        setCancelButton(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!addPostValue) {
            return;
        }; //Do nothing if there is nothing in the textarea
        handleAddPost(addPostValue, currentUser); //run the function created in "Inicio" to add a post
        setAddPostValue(''); //Turn the textarea back to nothing
        setAddPostStyle(); //Remove styling from textarea
        setCancelButton(false); //Remove the close btn

    }

    //Function to trigger the close btn in the textarea. Remove styling and value from the textarea
    const handleCancel = () => {
        setAddPostValue('');
        setAddPostStyle();
        setCancelButton(false);
    }


    return (
        <div className="Main-add-post">
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                <img src={currentUser.profileImg} alt="profile-img" className="profile-form-img" />
                <div className="textarea-position">
                    <textarea style={addPostStyle} value={addPostValue} className="form-control mr-sm-2 textarea" placeholder="Hacé un comentario..." onChange={(e) => setAddPostValue(e.target.value)} onFocus={handleFocus} ></textarea>
                    {
                        cancelButton ?
                            <div className="cancel-post-btn">
                                <FontAwesomeIcon className="close-post-icon" onClick={handleCancel} icon={faTimesCircle} />
                            </div>
                            :
                            null
                    }
                </div>
                <button className="btn btn-success my-2 my-sm-0 add-post-btn" type="submit">Comentar</button>
            </form>
        </div>
    )
}

export default AddPost;