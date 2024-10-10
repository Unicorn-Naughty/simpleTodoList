import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    id: number,
    name: string,
    value: boolean
}
type TinitialState = {
    todos: TTodo[]
}
const initialState: TinitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push(action.payload)
        },
        togleCheckStatus: (state, action) => {
            state.todos.map((todo) => todo.id === action.payload && (todo.value = !todo.value))
        },
        deleteCompleted: (state) => {
            state.todos = state.todos.filter((todo) => !todo.value)
        }
    }
})

export const { addTodo, togleCheckStatus, deleteCompleted } = todoSlice.actions