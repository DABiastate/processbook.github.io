import React, { PureComponent } from 'react';
import './ProcessBookSnippet.css'
function ProcessBookSnippet(props) {
    return ( 
        <div className='hero-process-snippet'>
            <img src={props.imageSource} alt="brokenLink" />
            <p className='caption'>{props.caption}</p>
        </div>
     );
}

export default ProcessBookSnippet;