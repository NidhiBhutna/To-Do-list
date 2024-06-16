// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText} - ${dueDate} - ${priority}</span>
                <div>
                    <button class="complete">Complete</button>
                    <button class="delete">Delete</button>
                </div>
            `;
            tasksList.appendChild(taskItem);

            // Clear inputs
            taskInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = 'Low';

            // Add event listeners for the new task item
            taskItem.querySelector('.complete').addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });
            taskItem.querySelector('.delete').addEventListener('click', () => {
                tasksList.removeChild(taskItem);
            });
        }
    });
});
