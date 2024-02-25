
export const signIn = async (user_id, password) => {
   

}

export const signUp = async (user_id, password) => {
    

}

export const DeleteAccount = async (user_id) => {

    

}

export const isLoggedIn = () => {
    const user = localStorage.getItem('thriftHubUser');
    if(user){
        return true;
    }else{
        return false;
    }
}