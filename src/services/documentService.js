const documents = [
    {
        "documentId":"docid1", 
        "documentHash":"",
        "applicantId":"1814073", 
        "applicantName":"appname1", 
        "applicantOrganizationNumber":"0001", 
        "organizationId":"54321",
        "organizationName":"orgname1", 
        "documentName":"docname8", 
        "description": "10th std certif",
        "dateOfAccomplishment":"12-25-2022",
        "tenure":"3",
        "percentage":"50",
        "outOfPercentage":"100",
        "status":"Self-Uploaded" ,
        "documentUrl" : "D:\\Practice\\Mega Proj\\Educert\\React\\MegaProject\\template\\cert.PNG",
        "updatedBy":"Teacher_1"
    },
    {
        "documentId":"docid2", 
        "documentHash":"",
        "applicantId":"1814074", 
        "applicantName":"appname2", 
        "applicantOrganizationNumber":"0002", 
        "organizationId":"54321",
        "organizationName":"orgname2", 
        "documentName":"docname10", 
        "description": "Degree Certificate",
        "dateOfAccomplishment":"31-07-2022",
        "tenure":"4",
        "percentage":"8.34",
        "outOfPercentage":"10",
        "status":"Self-Uploaded",
        "documentUrl" : "D:\\Practice\\Mega Proj\\Educert\\React\\MegaProject\\template\\cert.PNG",
        "updatedBy":"Teacher_2"
    }
]

export function getDocumentById(id){
    return documents.find(doc => doc._id === id);
}


export function getAllDocuments() {
    return documents;
}

export function getDocumentsByOrganizationId(organizationId){
    return documents.filter(doc => doc.organizationId === organizationId);
}

export function getDocumentsByApplicantId(applicantId){
    return documents.filter(doc => doc.applicantId === applicantId);
}

export function add(document){
    documents.push(document);
}

export function verify(){

}



 
