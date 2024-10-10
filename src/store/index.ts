import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice";
import { bottomBarSlice } from "./slices/bottomBarSlice";

export const store = configureStore({
    reducer: {
        todoReducer: todoSlice.reducer,
        bottomBarSlice: bottomBarSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch