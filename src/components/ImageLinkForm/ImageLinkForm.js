import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className = 'f3'>
                {'This web application will detect a face in any of your pictures. Please test it out. '}
            </p>   
            <div className='center'>
              <div className=' form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-black' onClick={onButtonSubmit}>Detect!</button>
              </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;