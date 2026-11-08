"use client";
import Link from "next/link";
import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { lab4ReduxStore, reduxActions, RootState, useLab4Store } from "./state";

function ChildCounter({ count, setCount }: { count: number; setCount: (count: number) => void }) {
  return <><button onClick={() => setCount(count - 1)}>Down</button> <button onClick={() => setCount(count + 1)}>Up</button></>;
}
function ReduxExamples() {
  const dispatch = useDispatch(); const count = useSelector((state: RootState) => state.lab4.count); const todos = useSelector((state: RootState) => state.lab4.todos); const [title, setTitle] = useState("");
  return <><h3>Redux Counter: {count} <button onClick={() => dispatch(reduxActions.decrement())}>Down</button> <button onClick={() => dispatch(reduxActions.increment())}>Up</button></h3><h3>Redux Todo List</h3><input aria-label="Redux todo title" value={title} onChange={(event) => setTitle(event.target.value)} /><button onClick={() => { if (title.trim()) { dispatch(reduxActions.addTodo(title.trim())); setTitle(""); } }}>Add Todo</button><ul>{todos.map((todo) => <li key={todo.id}>{todo.title} <button onClick={() => setTitle(todo.title)}>Edit</button> <button onClick={() => dispatch(reduxActions.deleteTodo(todo.id))}>Delete</button></li>)}</ul></>;
}
function Lab4Content() {
  const [count, setCount] = useState(0); const [parentCount, setParentCount] = useState(0); const [checked, setChecked] = useState(false); const [message, setMessage] = useState("Hello"); const [date, setDate] = useState("2026-01-01");
  const [person, setPerson] = useState({ firstName: "Minjing", lastName: "Liu", city: "Boston" }); const [items, setItems] = useState(["HTML", "CSS", "JavaScript"]); const [itemText, setItemText] = useState(""); const [zustandTitle, setZustandTitle] = useState("");
  const zCount = useLab4Store((state) => state.count); const zIncrement = useLab4Store((state) => state.increment); const zDecrement = useLab4Store((state) => state.decrement); const zTodos = useLab4Store((state) => state.todos); const addZTodo = useLab4Store((state) => state.addTodo); const deleteZTodo = useLab4Store((state) => state.deleteTodo);
  return <main id="wd-lab4"><h2>Lab 4 - Client State</h2>
    <h3>Event Handling</h3><button onClick={() => alert("Hello from Lab 4")}>Say Hello</button>
    <h3>Passing Data</h3><button onClick={() => setMessage("Button data was passed")}>Pass Data</button><p>{message}</p>
    <h3>useState Counter: {count} <button onClick={() => setCount(count - 1)}>Down</button> <button onClick={() => setCount(count + 1)}>Up</button></h3>
    <h3>Parent and Child Counter: {parentCount}</h3><ChildCounter count={parentCount} setCount={setParentCount} />
    <h3>Zustand Counter: {zCount} <button onClick={zDecrement}>Down</button> <button onClick={zIncrement}>Up</button></h3>
    <h3>Boolean State</h3><label><input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /> Enabled</label><p>Enabled: {String(checked)}</p>
    <h3>String State</h3><input aria-label="Message" value={message} onChange={(event) => setMessage(event.target.value)} /><p>{message}</p>
    <h3>Date State</h3><input type="date" value={date} onChange={(event) => setDate(event.target.value)} /><p>{date}</p>
    <h3>Object State</h3><input aria-label="First name" value={person.firstName} onChange={(event) => setPerson({ ...person, firstName: event.target.value })} /><input aria-label="Last name" value={person.lastName} onChange={(event) => setPerson({ ...person, lastName: event.target.value })} /><input aria-label="City" value={person.city} onChange={(event) => setPerson({ ...person, city: event.target.value })} /><pre>{JSON.stringify(person, null, 2)}</pre>
    <h3>Array State</h3><input aria-label="New array item" value={itemText} onChange={(event) => setItemText(event.target.value)} /><button onClick={() => { if (itemText.trim()) { setItems([...items, itemText.trim()]); setItemText(""); } }}>Add Item</button><ul>{items.map((item) => <li key={item}>{item} <button onClick={() => setItems(items.filter((current) => current !== item))}>Delete</button></li>)}</ul>
    <h3>Zustand Todo List</h3><input aria-label="Zustand todo title" value={zustandTitle} onChange={(event) => setZustandTitle(event.target.value)} /><button onClick={() => { if (zustandTitle.trim()) { addZTodo(zustandTitle.trim()); setZustandTitle(""); } }}>Add Todo</button><ul>{zTodos.map((todo) => <li key={todo.id}>{todo.title} <button onClick={() => setZustandTitle(todo.title)}>Edit</button> <button onClick={() => deleteZTodo(todo.id)}>Delete</button></li>)}</ul>
    <ReduxExamples /><h3>Query Parameters</h3><Link href="/labs/lab4/url-encoding/query-params?a=1&b=2"><button>Query 1 + 2</button></Link><h3>Path Parameters</h3><Link href="/labs/lab4/url-encoding/path-params/3/4"><button>Path 3 + 4</button></Link><h3>Summary</h3><p>This page demonstrates local, shared Zustand, and Redux client state.</p></main>;
}
export default function Lab4() { return <Provider store={lab4ReduxStore}><Lab4Content /></Provider>; }
