const applicants = [
    {
        _id:"1814073", 
        email:"yash@deorah.com",
        name:"Yash Deorah"
    },
    {
        _id:"11111", 
        email:"sanyamgandhi@gmail.com",
        name:"Sanyam Gandhi"
    }
]

export function getApplicantById(id){
    return applicants.find(org => org._id === id);
}


export function getAllDocuments() {
    return applicants;
}

export function add(applicant){
    applicants.push(applicant);
}




 
