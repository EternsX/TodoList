import { useState, useEffect } from 'react';
import { ListContext } from './ListContext';


export function ListProvider({ children }) {
    const [lists, setLists] = useState(() => {
        const stored = localStorage.getItem('lists');
        return stored ? JSON.parse(stored) : [];
    })

    const [selectedListId, setSelectedListId] = useState(null);
    const [toggledOptionsListId, setToggledOptionsListId] = useState(null);

    useEffect(() => {
        localStorage.setItem(
            'lists',
            JSON.stringify(lists)
        )
    }, [lists])

    const selectList = (id) => {
        setSelectedListId(id)
    }

    const addList = (name, icon) => {
        const id = crypto.randomUUID()
        setLists((prevLists) =>
            [...prevLists, { id, name, icon, todos: [] }]
        )
        selectList(id)
    }

    const changeListName = (id, newName) => {
        setLists(prevLists =>
            prevLists.map(list =>
                list.id === id ? { ...list, name: newName } : list
            )
        )
    }

    const changeListIcon = (id, newIcon) => {
        setLists(prevLists =>
            prevLists.map(list =>
                list.id === id ? { ...list, icon: newIcon } : list
            )
        )
    }

    const delList = (id) => {
        setLists(prevLists =>
            prevLists.filter(list => list.id !== id) // remove the one with matching id
        );
    }

    const addTodo = ((todo, listId) => {
        setLists(prevLists =>
            prevLists.map(l =>
                l.id === listId
                    ?
                    { ...l, todos: [...l.todos, { todo, id: crypto.randomUUID(), checked: false }] }
                    :
                    l
            )
        )
    })

    const toggleCheck = (todoId) => {
        setLists(prevLists =>
            prevLists.map(l =>
                l.id === selectedListId
                    ? {
                        ...l,
                        todos: l.todos.map(t =>
                            t.id === todoId
                                ? { ...t, checked: !t.checked }
                                : t
                        )
                    }
                    : l
            )
        );
    };

    const deleteTodo = (todoId) => {
        setLists(prevLists =>
            prevLists.map(l =>
                l.id === selectedListId
                    ? {
                        ...l,
                        todos: l.todos.filter(t => t.id !== todoId)
                    }
                    : l
            )
        )
    }

    const toggleOptions = (listId) => {
        setToggledOptionsListId(prev =>
            prev === listId ? null : listId
        );
    };



    return (
        <ListContext.Provider value={{ lists, addList, toggleOptions, selectedListId, toggledOptionsListId, selectList, changeListName, changeListIcon, delList, addTodo, toggleCheck, deleteTodo }}>
            {children}
        </ListContext.Provider>
    );
}