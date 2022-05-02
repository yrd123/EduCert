
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';

export default function ViewDocument() {
    let location = useLocation();
    const { documentUrl } = location.state;
    return (
        <React.Fragment>
            <img src={documentUrl} />
        </React.Fragment>
    )
}
