import { createSlice } from "@reduxjs/toolkit";
const initialUserValues={
    userEmail:'',
    isloggedin:false
}
const userSlice=createSlice({
    name:'user',
    initialState:initialUserValues,
    reducers:{
        setUserEmail(state, action){
            state.userEmail=action.payload;
            state.isloggedin=true;
            localStorage.setItem("email",action.payload)
        },
        logout(state){
           state.isloggedin=false;
           localStorage.clear()
        }
    }
});

export default userSlice.reducer;
export const userActions=userSlice.actions;