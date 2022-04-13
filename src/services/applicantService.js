const applicants = [
    {
        _id:"1814073", 
        email:"yash@deorah.com",
        name:"Yash Deorah",
        address:"kalyan",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        dateOfBirth:"12/11/2000",
        documents:["docid1","docid3"],
        permissionGranted:["orgid1","orgid3","orgid5"]
    },
    {
        _id:"11111", 
        email:"sanyamgandhi@gmail.com",
        name:"Sanyam Gandhi",
        address:"kalyan",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        dateOfBirth:"12/11/2000",
        
    },
    {
        _id:"1814074", 
        email:"yash@deorah.com",
        name:"Yash Deorah",
        address:"kalyan",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        dateOfBirth:"12/11/2000"
    },
    {
        _id:"1814097", 
        email:"sanyamgandhi@gmail.com",
        name:"Sanyam Gandhi",
        address:"kalyan",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        dateOfBirth:"12/11/2000"
    },
    {
        _id:"1814080", 
        email:"yash@deorah.com",
        name:"Yash Deorah",
        address:"kalyan",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        dateOfBirth:"12/11/2000"
    },
    {
        _id:"1814055", 
        email:"sanyamgandhi@gmail.com",
        name:"Sanyam Gandhi",
        address:"kalyan",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        dateOfBirth:"12/11/2000"
    }
]

export function getApplicantById(id){
    return applicants.find(org => org._id === id);
}


export function getAllApplicants() {
    return applicants;
}

export function add(applicant){
    applicants.push(applicant);
}




 
