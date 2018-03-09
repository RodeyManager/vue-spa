import moment from 'moment';

class DB {
    constructor() {
        this.todos = [];
        this._readTodos();
    }

    getTodoList() {
        return [...this.todos];
    }

    setTodoList(todos) {
        this.todos = [...todos];
        this._saveTodos();
    }

    addTodo(todo) {
        if (!todo || !('content' in todo)) return;
        this.todos.push(todo);
        this._saveTodos();
    }

    addTodoAsContent(content) {
        if (!content) return;
        const addTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const todo = { content, completed: false, addTime };
        this.addTodo(todo);
    }

    deleteTodoAsIndex(index) {
        if (index < 0) return;
        this.todos.splice(index, 1);
        this._saveTodos();
    }

    switchTodo(index) {
        if (index < 0) return;
        let todo = this.todos[index];
        todo.completed = !todo.completed;
        this._saveTodos();
    }

    updateTodo(index, content) {
        if (index < 0) return;
        let todo = this.todos[index];
        todo.content = content;
        this._saveTodos();
    }

    _readTodos() {
        try {
            this.todos = JSON.parse(localStorage.getItem('_todos_')) || [];
        } catch (e) {
            this.todos = [];
        }
    }
    _saveTodos() {
        if (!Array.isArray(this.todos)) return;
        localStorage.setItem('_todos_', JSON.stringify(this.todos || []));
    }
}

export default new DB();
