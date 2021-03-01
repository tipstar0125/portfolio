'use strict';

{
    
    const todoNode = document.getElementById('todo');
    let taskId = 0;

    document.getElementById('add').addEventListener('click', () => {
    
        const task = document.getElementById('task');
        const taskRow = document.createElement('tr');
        const taskIdNode = document.createElement('td');
        const taskCommentNode = document.createElement('td');
        const taskStatusNode = document.createElement('td');
        const taskDeleteNode = document.createElement('td');
        const taskStatusButtonNode = document.createElement('button');
        const taskDeleteButtonNode = document.createElement('button');

        taskIdNode.textContent = taskId;
        taskId++;
        taskCommentNode.textContent = task.value;
        task.value = '';
        taskStatusButtonNode.textContent = '作業中';
        taskDeleteButtonNode.textContent = '削除';

        taskStatusNode.appendChild(taskStatusButtonNode);
        taskDeleteNode.appendChild(taskDeleteButtonNode);
        taskRow.appendChild(taskIdNode);
        taskRow.appendChild(taskCommentNode);
        taskRow.appendChild(taskStatusNode);
        taskRow.appendChild(taskDeleteNode);
        todoNode.appendChild(taskRow);
        
    });

}