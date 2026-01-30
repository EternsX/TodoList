import { useContext } from "react"
import { ListContext } from "../../context/ListContext"
import './Todos.css'
import TodoHeader from "./TodoHeader";
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function Todos({ onClick }) {
    const { lists, selectedListId } = useContext(ListContext);
    const todoList = lists.find(l => l.id === selectedListId);

    if (!todoList) {
        return lists.length ? <p>Select a list</p> : <p>No lists exist yet</p>;
    }

    return (
        <div className="todos-wrapper">
            <TodoHeader todoList={todoList} onClick={onClick} />
            <div className="hr"></div>
            <div>
                <TodoList todoList={todoList.todos}/>
                <TodoForm id={selectedListId}/>
            </div>
        </div>
    )
}