'use strict';

{
    
    const todoNode = document.getElementById('todo');
    const taskNodes = [];

    document.getElementById('add').addEventListener('click', () => {
    
        const task = document.getElementById('task');

        const taskNode = {
            taskRow: document.createElement('tr'),
            taskIdNode: document.createElement('td'),
            taskCommentNode: document.createElement('td'),
            taskStatusNode: document.createElement('td'),
            taskDeleteNode: document.createElement('td'),
            taskStatusButtonNode: document.createElement('button'),
            taskDeleteButtonNode: document.createElement('button'),
        };

        taskNodes.push(taskNode);

        taskNode.taskIdNode.textContent = taskNodes.length-1;
        taskNode.taskCommentNode.textContent = task.value;
        task.value = '';
        taskNode.taskStatusButtonNode.textContent = '作業中';
        taskNode.taskDeleteButtonNode.textContent = '削除';

        taskNode.taskStatusNode.appendChild(taskNode.taskStatusButtonNode);
        taskNode.taskDeleteNode.appendChild(taskNode.taskDeleteButtonNode);
        taskNode.taskRow.appendChild(taskNode.taskIdNode);
        taskNode.taskRow.appendChild(taskNode.taskCommentNode);
        taskNode.taskRow.appendChild(taskNode.taskStatusNode);
        taskNode.taskRow.appendChild(taskNode.taskDeleteNode);
        todoNode.appendChild(taskNode.taskRow);
        
    });

}