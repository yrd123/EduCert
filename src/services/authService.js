export async function login(loginCredentials){
    console.log(loginCredentials)
    let token = "";
    const promise = await fetch("http://localhost:4000/login", {
    method:"POST",
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify(loginCredentials)
    })
    // .then(response => console.log(response.json()))
    // .then(data => console.log(data));
    console.log(promise)
    return token;
    //localStorage.setItem('eduCertJwtToken', data)
    //console.log(localStorage.getItem('eduCertJwtToken'));
}

export function logout(){
    localStorage.removeItem('eduCertJwtToken');
}