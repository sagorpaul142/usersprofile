import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../features/api/userSlice.js";

const store = configureStore({
    reducer: {
        [userSlice.reducerPath]: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware)
})

export default store;