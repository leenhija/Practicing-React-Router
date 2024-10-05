import {configureStore} from '@reduxjs/toolkit'
import userSlice from './user'
import event from './events';
const store=configureStore({
    reducer:{events:event,user:userSlice}
})
export default store;