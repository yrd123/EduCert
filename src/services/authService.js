


export async function login(loginCredentials){
    console.log(loginCredentials)
    try{
        const promise = await fetch("http://localhost:4000/login", {
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify(loginCredentials)
        });
        console.log(promise)
        if(promise.ok){
            let token = await promise.text();
        console.log(promise.ok)
            return {ok:true,token};
        }
        else
            await promise.text().then(text => { throw new Error(text) })
    }
    catch(ex){
        alert(ex.message);
        return {ok:false, error:ex.message};
    }
}

export function logout(){
    localStorage.removeItem('eduCertJwtToken');
}