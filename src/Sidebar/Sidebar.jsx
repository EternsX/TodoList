import { useContext } from "react"
import { ListContext } from "../../context/ListContext"
import './Sidebar.css'

export default function Sidebar() {
    const { lists, selectList, selectedListId, delList, toggleOptions, toggledOptionsListId } = useContext(ListContext)

    const onClick = (e, id) => {
        e.stopPropagation();
        delList(id);
    }

    return (
        <div className="lists-wrapper">
            {lists.map((list) => {
                return (
                    <div key={list.id} tabIndex={0} className={`list ${list.id === selectedListId ? "active" : ""}`}
                        onClick={() => selectList(list.id)}>
                        <h3>{list.icon?.icon} {list.name}</h3>
                        <div className="list-actions">
                            <button className="options" onClick={(e) => {
                                e.stopPropagation();
                                toggleOptions(list.id);
                            }}
                            >...</button>
                            <button
                                className={`del ${toggledOptionsListId === list.id ? "show" : ""}`}
                                onClick={(e) => onClick(e, list.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}