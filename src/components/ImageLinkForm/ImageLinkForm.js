import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className = 'f4'>
                {'This web application will detect a face in any of your pictures with a single person in it.'}
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