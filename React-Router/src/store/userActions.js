import { userActions } from "./user";
export const signup=(userData)=>{
return async dispatch=>{
const addUser=async()=>{
    const response=await fetch('http://localhost:8080/users/signup',{
        method:'POST',
        body:JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json', 
          },
    })
    if(!response.ok){
        throw new Error('Failed to Add New user')
    }
}
try{
  await addUser();
  dispatch(userActions.setUserEmail(userData.email))
}catch(error){
    throw new Error({message:error.message || 'an error occured'})
}
}
}
export const login=(userData)=>{
    return async dispatch=>{
    const checkAuth=async()=>{
        const response=await fetch('http://localhost:8080/users/login',{
            method:'POST',
            body:JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json', 
              },
        })
        if(!response.ok){
            throw new Error('Failed to login ')
        }
    }
    try{
      await checkAuth();
      
      dispatch(userActions.setUserEmail(userData.email))
    }catch(error){
        throw new Error({message:error.message || 'an error occured'})
    }
    }
    }
