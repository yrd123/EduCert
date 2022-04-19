export function login(loginCredentials){
    let token = "";
    fetch("http://localhost:4000/login", {
    method:"POST",
    headers:{"Content-Type" : "application/json"},
    body:{...loginCredentials}
    })
    .then(response => response.json())
    .then(data => token = data);
    return token;
    //localStorage.setItem('eduCertJwtToken', data)
    //console.log(localStorage.getItem('eduCertJwtToken'));

}

export function logout(){
    localStorage.removeItem('eduCertJwtToken');
}