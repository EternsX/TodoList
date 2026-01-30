import IconList from './IconList';
import TextField from '@mui/material/TextField';
import './NewListForm.css'

export default function NewListForm({ name, onClose, handleSubmit, setName, search, setSearch, filteredIcons, selectedIcon, setSelectedIcon }) {
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="New List"
                variant="outlined"
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
                autoComplete="off"
            />

            <TextField
                className='search-icons'
                label="Search Icons"
                variant="outlined"
                value={search}
                onChange={e => setSearch(e.target.value)}
                fullWidth
            />


            {/* Horizontal icon picker */}

            <IconList
                filteredIcons={filteredIcons}
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
            />


            <div className="modal-actions">
                <button type="button" onClick={onClose}>
                    Cancel
                </button>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}
