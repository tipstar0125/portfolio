'use strict';

{
    
    const todoNode = document.getElementById('todo');
    const todos = [];

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

        todos.forEach((todo, index) => {

            const taskNode = {
                row: document.createElement('tr'),
                idNode: document.createElement('td'),
                commentNode: document.createElement('td'),
                statusNode: document.createElement('td'),
                deleteNode: document.createElement('td'),
                statusButtonNode: document.createElement('button'),
                deleteButtonNode: document.createElement('button'),
            };

            taskNode.idNode.textContent = index;
            taskNode.commentNode.textContent = todo.task;
            task.value = '';
            taskNode.statusButtonNode.textContent = todo.status;
            taskNode.deleteButtonNode.textContent = '削除';
            taskNode.deleteButtonNode.addEventListener('click', () => {
                todos.splice(index, 1);
                displayTodos(todos);
            });
    
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
            task: task.value,
            status: '作業中'
        };

        todos.push(todo);
        displayTodos(todos);
      
    });

}