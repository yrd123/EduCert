const organizations = [
    {
        _id:"54321", 
        email:"somaiya@edu.com",
        name:"KJSCE"
    },
    {
        _id:"44444", 
        email:"sanghvi@edu.com",
        name:"DJ Sanghvi"
    }
]

export function getOrganizationById(id){
    return organizations.find(org => org._id === id);
}


export function getAllDocuments() {
    return organizations;
}

export function add(organization){
    organizations.push(organization);
}




 
