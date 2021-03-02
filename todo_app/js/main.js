'use strict';

{
    
    const todoNode = document.getElementById('todo');
    const todos = [];
    let taskID = 0;

    function deleteView() {

        const outputNodes = document.querySelectorAll('tbody>tr');
        const tableBodyNode = document.getElementById('todo');

        if (outputNodes) {
            outputNodes.forEach(outputNode => {
                tableBodyNode.removeChild(outputNode);
            });
        }
    }

    function displayTodos (todos) {

        deleteView();

        todos.forEach(todo => {

            const taskNode = {
                row: document.createElement('tr'),
                idNode: document.createElement('td'),
                commentNode: document.createElement('td'),
                statusNode: document.createElement('td'),
                deleteNode: document.createElement('td'),
                statusButtonNode: document.createElement('button'),
                deleteButtonNode: document.createElement('button'),
            };

            taskNode.idNode.textContent = todo.id;
            taskNode.commentNode.textContent = todo.task;
            task.value = '';
            taskNode.statusButtonNode.textContent = todo.status;
            taskNode.deleteButtonNode.textContent = '削除';
    
            taskNode.statusNode.appendChild(taskNode.statusButtonNode);
            taskNode.deleteNode.appendChild(taskNode.deleteButtonNode);
            taskNode.row.appendChild(taskNode.idNode);
            taskNode.row.appendChild(taskNode.commentNode);
            taskNode.row.appendChild(taskNode.statusNode);
            taskNode.row.appendChild(taskNode.deleteNode);
            todoNode.appendChild(taskNode.row);

        });

    }

    document.getElementById('add').addEventListener('click', () => {
    
        const task = document.getElementById('task');
        const todo = {
            id: taskID,
            task: task.value,
            status: '作業中'
        };

        taskID++;
        todos.push(todo);
        displayTodos(todos);
      
    });

}