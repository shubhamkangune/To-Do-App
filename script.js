const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const taskTextSpan = document.createElement('span');
        const actionsDiv = document.createElement('div');
        const completeButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        taskTextSpan.textContent = taskText;
        actionsDiv.classList.add('actions');
        completeButton.textContent = 'Complete';
        deleteButton.textContent = 'Delete';

        completeButton.onclick = function() {
            taskItem.classList.toggle('completed');
            if (taskItem.classList.contains('completed')) {
                completedTasksList.appendChild(taskItem);
                completeButton.textContent = 'Undo';
            } else {
                pendingTasksList.appendChild(taskItem);
                completeButton.textContent = 'Complete';
            }
        };

        deleteButton.onclick = function() {
            taskItem.remove();
        };

        actionsDiv.appendChild(completeButton);
        actionsDiv.appendChild(deleteButton);

        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(actionsDiv);

        pendingTasksList.appendChild(taskItem);

        taskInput.value = '';
    }
}
