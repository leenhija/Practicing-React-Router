import {createSlice} from'@reduxjs/toolkit'
const initalevent={
    events:[],
}
const event=createSlice({
    name:'eventSlice',
    initialState:initalevent,
    reducers:{
        getEvents(state , action){
            state.events=action.payload.eventData
           
        },
       
    }
})
export const eventActions=event.actions;
export default event.reducer;