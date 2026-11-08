import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "zustand";

export type Todo = { id: number; title: string };

type ZustandState = { count: number; increment: () => void; decrement: () => void; todos: Todo[]; addTodo: (title: string) => void; deleteTodo: (id: number) => void; };

export const useLab4Store = create<ZustandState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  todos: [{ id: 1, title: "Learn Zustand" }, { id: 2, title: "Build Lab 4" }, { id: 3, title: "Test the page" }],
  addTodo: (title) => set((state) => ({ todos: [...state.todos, { id: Date.now(), title }] })),
  deleteTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

type ReduxState = { count: number; todos: Todo[] };
const reduxSlice = createSlice({
  name: "lab4",
  initialState: { count: 0, todos: [{ id: 1, title: "Learn Redux" }, { id: 2, title: "Practice reducers" }, { id: 3, title: "Finish Lab 4" }] } as ReduxState,
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    addTodo: (state, action: PayloadAction<string>) => { state.todos.push({ id: Date.now(), title: action.payload }); },
    deleteTodo: (state, action: PayloadAction<number>) => { state.todos = state.todos.filter((todo) => todo.id !== action.payload); },
  },
});

export const reduxActions = reduxSlice.actions;
export const lab4ReduxStore = configureStore({ reducer: { lab4: reduxSlice.reducer } });
export type RootState = ReturnType<typeof lab4ReduxStore.getState>;
