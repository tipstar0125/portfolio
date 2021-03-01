'use strict';

{
    
    const todoNode = document.getElementById('todo');
    const taskNodes = [];

    document.getElementById('add').addEventListener('click', () => {
    
        const task = document.getElementById('task');

        const taskNode = {
            row: document.createElement('tr'),
            idNode: document.createElement('td'),
            commentNode: document.createElement('td'),
            statusNode: document.createElement('td'),
            deleteNode: document.createElement('td'),
            statusButtonNode: document.createElement('button'),
            deleteButtonNode: document.createElement('button'),
        };

        taskNodes.push(taskNode);

        taskNode.idNode.textContent = taskNodes.length-1;
        taskNode.commentNode.textContent = task.value;
        task.value = '';
        taskNode.statusButtonNode.textContent = '作業中';
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