const storeToken =(value)=>{
    if(value){
       // console.log('store Token');
        const {access,refresh,accessExpiresIn} = value;
        localStorage.setItem('access_token',access);
        localStorage.setItem('refresh_token',refresh);
    //     localStorage.setItem('access_expires_in',parseInt(accessExpiresIn, 10));
    //     console.log(accessExpiresIn);
    //     const timestamp = accessExpiresIn; // Assuming this is the timestamp stored in localStorage
    //    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    //     console.log(date);
    //     const currentTime = Math.floor(Date.now() / 1000); 
    //     console.log(currentTime);

    }
}

const getToken= ()=>{
    let access_token  = localStorage.getItem('access_token');
    let refresh_token  = localStorage.getItem('refresh_token');
 //   let access_expires_in  = parseInt(localStorage.getItem('access_expires_in'), 10);
    return {access_token,refresh_token}
}

const removeToken = ()=>{
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_expires_in'); // Remove stored expiry time
}


// const isAccessTokenExpired = (value) => {
//     //const accessExpiresIn = parseInt(localStorage.getItem('access_expires_in'), 10);
//     //console.log(accessExpiresIn);
//     const {accessExpiresIn} = value;
//     console.log(accessExpiresIn);
//     if (!accessExpiresIn) return true; // If expiry time is not set, consider it expired
//     const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
//     console.log(currentTime);
//     return currentTime >= accessExpiresIn;
// }

export {storeToken,getToken,removeToken}