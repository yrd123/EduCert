import React from 'react';

const PreviewCertificate = (props) => {
    return ( 
        <>
            <img src={props.document.documentUrl}></img>
            <br></br>
            <p>Document Hash = {props.document.documentHash}</p>
            <br></br>
            {props.document.documentName}
        </>
     );
}
 
export default PreviewCertificate;