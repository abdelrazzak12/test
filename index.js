document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    const taskList = document.querySelector('.task-list');
    const noTasksMessage = document.getElementById('no-tasks-message');

    if (taskValue) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.textContent = taskValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
            if (!taskList.children.length) {
                noTasksMessage.style.display = 'block';
            }
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        noTasksMessage.style.display = 'none';
    }
});

document.getElementById('clear-all').addEventListener('click', function() {
    document.querySelector('.task-list').innerHTML = '';
    document.getElementById('no-tasks-message').style.display = 'block';
});