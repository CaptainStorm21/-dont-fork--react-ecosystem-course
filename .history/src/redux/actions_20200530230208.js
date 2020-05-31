export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
});

export const REMOVE_TODO = 'REMOVE_TODO'