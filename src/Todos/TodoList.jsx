import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react"
import { ListContext } from "../../context/ListContext"
import './TodoList.css'

export default function TodoList({ todoList }) {
    const { toggleCheck, deleteTodo } = useContext(ListContext);
    return (
        <div className='todoList'>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todoList.map((t) => {
                    const labelId = `checkbox-list-label-${t.id}`;

                    return (
                        <ListItem
                            key={t.id}
                            secondaryAction={
                                <IconButton onClick={() => deleteTodo(t.id)} edge="end" aria-label="comments">
                                    <DeleteIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        onClick={() => toggleCheck(t.id)}
                                        edge="start"
                                        checked={t.checked ?? false}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText className="todo" id={labelId} primary={t.todo} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}
