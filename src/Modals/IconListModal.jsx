import { useState } from "react";
import "./IconListModal.css";
import { ICONS } from '../../data/icons'
import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import IconList from './IconList';
import TextField from '@mui/material/TextField';


export default function IconListModal({ onClose }) {
    const [search, setSearch] = useState("");
    const [selectedIcon, setSelectedIcon] = useState(null);
    const { changeListIcon, selectedListId } = useContext(ListContext)


    function handleSubmit(e) {
        e.preventDefault();

        // later: addList(name, selectedIcon)   
        if (selectedIcon) changeListIcon(selectedListId, selectedIcon);
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

                <form onSubmit={handleSubmit}>
                    <TextField
                        className='search-icons'
                        label="Search Icons"
                        variant="outlined"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        fullWidth
                    />
                    <IconList
                        filteredIcons={filteredIcons}
                        selectedIcon={selectedIcon}
                        setSelectedIcon={setSelectedIcon}
                    />
                    <div className="modal-actions">
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit">Change</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
