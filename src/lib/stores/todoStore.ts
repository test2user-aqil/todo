import { writable } from 'svelte/store';
import { browser } from '$app/environment';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export const todos = writable<Todo[]>([]);

export const addTodo = (title: string) => {
	todos.update((cur) => {
		const newTodos = [...cur, { id: Date.now(), title, completed: false }];
		return newTodos;
	});
};

export const removeTodo = (id: number) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodo = (id: number) => {
	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
			}
		}
		if (index !== -1) {
			todos[index].completed = !todos[index].completed;
		}

		return todos;
	});
};
