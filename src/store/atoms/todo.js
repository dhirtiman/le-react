import { selector } from "recoil";
import { atom } from "recoil";



export const todosAtom = atom({
    key: 'todosAtom',
    default: [{
        id: 1,
        title: 'todo 1',
        description: 'description 1',
    },]
})

export const filterAtom  = atom({
    key: 'filterAtom',
    default: '',
})  

export const filteredTodosSelector = selector({
    key: 'filteredTodos',
    get: ({get}) => {
        const todos = get(todosAtom);
        const filter = get(filterAtom);
        return todos.filter((todo) => todo.title.includes(filter) || todo.description.includes(filter))
    }
})



