import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../views/user/usersSlice";




const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
    }
})
export default store