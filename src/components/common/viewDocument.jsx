
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';

export default function ViewDocument() {
    let location = useLocation();
    const { documentUrl } = location.state;
    return (
        <React.Fragment>
	{   documentUrl &&
            <img src={documentUrl} />
        }
	{
	!documentUrl && <div>Document has been tampered or removed!</div>
}	
	 </React.Fragment>
    )
}
