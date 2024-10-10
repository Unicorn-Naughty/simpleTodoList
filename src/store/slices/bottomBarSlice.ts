import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type TinitialState = string
const initialState: TinitialState = "all"

export const bottomBarSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        viewComplete: (_, action: PayloadAction<string>) => {
            return action.payload
        },
        viewActive: (_, action: PayloadAction<string>) => {
            return action.payload
        },
        viewAll: (_, action: PayloadAction<string>) => {
            return action.payload
        },
    }
})

export const { viewComplete, viewActive, viewAll } = bottomBarSlice.actions