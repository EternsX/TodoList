import Sidebar from "./Sidebar/Sidebar"
import './Body.css'
import Todos from "./Todos/Todos"

export default function Body({ onChangeIcon }) {
    return (
        <div className="body-container">
            <Sidebar />
            <div className="vertical-line"></div>
            <Todos onClick={onChangeIcon}/>
        </div>
    )
}