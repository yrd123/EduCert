const documents = [
    {
        _id:"docid1",
        documentName:"docname1",
        applicantId:"applicantid1",
        applicantName:"appname1",
        organizationId:"orgid1",
        organizationName:"orgname1",
        dateOfIssue:"12-1-22",
        typeOfCertificate:"cert1",
        status:"Verified"
    },
    {
        _id:"docid2",
        documentName:"docname2",
        applicantId:"applicantid2",
        applicantName:"appname2",
        organizationId:"orgid1",
        organizationName:"orgname2",
        dateOfIssue:"13-1-22",
        typeOfCertificate:"cert3",
        status:"Verified"
    },
    {
        _id:"docid3",
        documentName:"docname3",
        applicantId:"applicantid3",
        applicantName:"appname3",
        organizationId:"orgid3",
        organizationName:"orgname3",
        dateOfIssue:"32-3-22",
        typeOfCertificate:"cert3",
        status:"Self-uploaded"
    },
    {
        _id:"docid4",
        documentName:"docname4",
        applicantId:"applicantid4",
        applicantName:"appname4",
        organizationId:"orgid4",
        organizationName:"orgname4",
        dateOfIssue:"42-4-22",
        typeOfCertificate:"cert4",
        status:"Verified"
    },
    {
        _id:"docid5",
        documentName:"docname5",
        applicantId:"applicantid5",
        applicantName:"appname5",
        organizationId:"orgid5",
        organizationName:"orgname5",
        dateOfIssue:"52-5-22",
        typeOfCertificate:"cert5",
        status:"Self-uploaded"
    },
    {
        _id:"docid6",
        documentName:"docname6",
        applicantId:"applicantid6",
        applicantName:"appname6",
        organizationId:"orgid1",
        organizationName:"orgname6",
        dateOfIssue:"62-6-22",
        typeOfCertificate:"cert6",
        status:"Self-uploaded"
    },
    {
        _id:"docid7",
        documentName:"docname7",
        applicantId:"applicantid1",
        applicantName:"appname7",
        organizationId:"orgid7",
        organizationName:"orgname7",
        dateOfIssue:"72-7-22",
        typeOfCertificate:"cert7",
        status:"Self-uploaded"
    },
    {
        _id:"docid8",
        documentName:"docname8",
        applicantId:"applicantid1",
        applicantName:"appname8",
        organizationId:"orgid8",
        organizationName:"orgname8",
        dateOfIssue:"82-8-22",
        typeOfCertificate:"cert8",
        status:"Self-uploaded"
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



 
