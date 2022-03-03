const organizations = [
    {
        _id:"44444", 
        email:"sanghvi@edu.com",
        name:"DJ Sanghvi",
        address:"shahad",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        type:"school"
    },
    {
        _id:"54321", 
        email:"somaiya@edu.com",
        name:"KJSCE",
        address:"shahad",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        type:"school"
    },
    {
        _id:"1814074", 
        email:"yash@deorah.com",
        name:"Yash Deorah",
        address:"shahad",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        type:"college"
    },
    {
        _id:"1814097", 
        email:"sanyamgandhi@gmail.com",
        name:"Sanyam Gandhi",
        address:"shahad",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        type:"college"
    },
    {
        _id:"1814080", 
        email:"yash@deorah.com",
        name:"Yash Deorah",
        address:"shahad",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        type:"jr college"
    },
    {
        _id:"1814055", 
        email:"sanyamgandhi@gmail.com",
        name:"Sanyam Gandhi",
        address:"shahad",
        pin:"421103",
        state:"Maharashtra",
        country:"India",
        contact:"1234567077",
        type:"jr college"
    }
]

export function getOrganizationById(id){
    return organizations.find(org => org._id === id);
}


export function getAllOrganizations() {
    return organizations;
}

export function add(organization){
    organizations.push(organization);
}




 
