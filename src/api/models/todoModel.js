// Todo list model documentation

/**
 * @typedef {Object} TodoItem
 * @property {string} id - The unique identifier of the todo item
 * @property {string} content - The content of the todo item
 * @property {boolean} completed - Whether the todo item is completed
 * @property {string} createdAt - The creation timestamp
 * @property {string} updatedAt - The last update timestamp
 */

/**
 * @typedef {Object} TodoList
 * @property {string} id - The unique identifier of the todo list
 * @property {string} title - The title of the todo list
 * @property {string} [description] - Optional description of the todo list
 * @property {string} createdAt - The creation timestamp
 * @property {string} updatedAt - The last update timestamp
 * @property {TodoItem[]} items - Array of todo items in the list
 */

/**
 * @typedef {Object} CreateTodoListInput
 * @property {string} title - The title of the todo list
 * @property {string} [description] - Optional description of the todo list
 */

/**
 * @typedef {Object} UpdateTodoListInput
 * @property {string} [title] - Optional new title for the todo list
 * @property {string} [description] - Optional new description for the todo list
 */

// Export the types for use in other files
module.exports = {
    // These are just type definitions, no actual values to export
}; 