import { useContext, useState, useEffect } from "react"
import { ListContext } from "../../context/ListContext"
import './TodoHeader.css'

export default function TodoHeader({ todoList, onClick }) {
    const [input, setInput] = useState("");
    const { selectedListId, changeListName } = useContext(ListContext);

    useEffect(() => {
        if (todoList) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setInput(todoList.name);
        }
    }, [todoList]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.target.blur();
        }
    };

    return (
        <div className="header">
            <button onClick={onClick} className="header-icon">{todoList.icon.icon}</button>
            <input onKeyDown={handleKeyDown} onBlur={() => changeListName(selectedListId, input)} onChange={handleChange} className="header-title" type="text" value={input} />
        </div>
    )
}