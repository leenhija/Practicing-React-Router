import {configureStore} from '@reduxjs/toolkit'
import event from './events';
const store=configureStore({
    reducer:{events:event}
})
export default store;