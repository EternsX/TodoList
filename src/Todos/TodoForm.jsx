import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
import { useState, useContext } from "react"
import { ListContext } from "../../context/ListContext"
import './TodoForm.css'

export default function TodoForm({ id }) {
    const { addTodo } = useContext(ListContext);
    const [value, setValue] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;

        addTodo(value, id);
        setValue("");
        console.log()
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Filled"
                variant="filled"
                className='todo-input'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoComplete="off"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit" edge="end" size="small">
                                <CreateIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

        </form>
    );
}
