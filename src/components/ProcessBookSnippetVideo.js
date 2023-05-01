import React, { PureComponent } from 'react';
import './ProcessBookSnippetVideo.css'
function ProcessBookSnippet(props) {
    return ( 
        <div className='hero-process-snippet'>
            <video controls>
                <source src={props.imageSource} type="video/mp4"></source>
            </video>
            <p className='caption'>{props.caption}</p>
        </div>
     );
}

export default ProcessBookSnippet;