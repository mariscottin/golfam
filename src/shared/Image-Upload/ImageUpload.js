import React, { useRef, useState, useEffect } from 'react';

import './ImageUpload.css';

const ImageUpload = props => {
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();

    useEffect(() => {
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }, [file])

    const pickedHandler = event => {
        let pickedFile;
        let fileIsValid = isValid;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        } else {
            setIsValid(false);
            fileIsValid = false;
        }
        props.onInput(props.id, pickedFile, fileIsValid)
    }

    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

    return (
        <div>
            <input
                type="file"
                ref={filePickerRef}
                id={props.id}
                style={{ display: 'none' }}
                accept=".jpg,.png,.jpeg"
                onChange={pickedHandler}
            />
            <div className={`image-upload ${props.center && 'center'}`}>
                {!previewUrl &&
                    <div className="image-upload__select" onClick={pickImageHandler}>
                        <p>¡Elegí tu mejor foto de golfista!</p>
                    </div>
                }
                {previewUrl &&
                    <React.Fragment>
                        <div className="image-upload__preview">
                            <img src={previewUrl} alt="Preview" />
                        </div>
                        <div className="image-upload__select-another" onClick={pickImageHandler}>Cambiar</div>

                    </React.Fragment>
                }
            </div>
            {!isValid && <p>{props.errorText}</p>}
        </div>
    );
}

export default ImageUpload;