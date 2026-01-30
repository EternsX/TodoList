import { useState } from "react";
import "./AddListModal.css";
import { ICONS } from '../../data/icons'
import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import NewListForm from './NewListForm';


export default function AddListModal({ onClose }) {
    const [name, setName] = useState("");
    const [search, setSearch] = useState("");
    const [selectedIcon, setSelectedIcon] = useState(null);
    const { addList } = useContext(ListContext);


    function handleSubmit(e) {
        e.preventDefault();
        if (!name.trim()) {
            alert("Please enter a list name");
            return;
        }

        if (!selectedIcon) {
            alert("Please select an icon");
            return;
        }

        // later: addList(name, selectedIcon)   
        addList(name, selectedIcon)
        onClose();
    }

    const filteredIcons = ICONS.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal"
                onClick={e => e.stopPropagation()}
            >
                <h2>Create New List</h2>

                <NewListForm
                    setName={setName}
                    onClose={onClose}
                    handleSubmit={handleSubmit}
                    search={search}
                    setSearch={setSearch}
                    filteredIcons={filteredIcons}
                    selectedIcon={selectedIcon}
                    setSelectedIcon={setSelectedIcon}
                    name={name}
                />
            </div>
        </div>
    );
}
