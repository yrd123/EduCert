import React from 'react';

const PreviewCertificate = (props) => {
    return ( 
        <>
            <img src={props.document.documentUrl} style={{width:150,height:80}}></img>
            {props.document.documentName}
        </>
     );
}
 
export default PreviewCertificate;