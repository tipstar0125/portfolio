'use strict';

{
    
    const task = document.getElementById('task');
    const todoNode = document.getElementById('todo');
    const radioNodes = document.querySelectorAll('input[name="status"]'); 
    const todos = [];

    // 表示クリア（画面表示前に実行）
    function deleteView() {

        const outputNodes = document.querySelectorAll('tbody>tr');
        const tableBodyNode = document.getElementById('todo');

        if (outputNodes) {
            outputNodes.forEach(outputNode => {
                tableBodyNode.removeChild(outputNode);
            });
        }
    }

    // 画面表示
    function displayTodos (todos) {

        deleteView();

        // ラジオボタン選択の取得
        let selectedStatus;

        radioNodes.forEach(radioNode => {
            if (radioNode.checked === true) {
                selectedStatus = radioNode.value;
            }
        });

        // タスク表示
        todos.forEach((todo, index) => {

            // 各タスクのステータスを取得し、ラジオボタンのvalueに対応する値をstatusValueに代入
            let statusValue;

            if (todo.status === '作業中') {
                statusValue = 'working';
            } else {
                statusValue = 'completed';
            }

            // 要素生成
            if (selectedStatus === 'all' || selectedStatus === statusValue) {

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
    
                taskNode.statusButtonNode.id = index;
                taskNode.statusButtonNode.textContent = todo.status;
                // 状態ボタンが押された時のイベント
                taskNode.statusButtonNode.addEventListener('click', () => {
    
                const currentStatus = todos[taskNode.statusButtonNode.id].status;
    
                    if (currentStatus === '作業中') {
                        todos[taskNode.statusButtonNode.id].status = '完了';
                        displayTodos(todos);
                    } else {
                        todos[taskNode.statusButtonNode.id].status = '作業中';
                        displayTodos(todos);
                    }
    
                });
                
                taskNode.deleteButtonNode.textContent = '削除';
                // 削除ボタンが押された時のイベント
                taskNode.deleteButtonNode.addEventListener('click', () => {
    
                    todos.splice(index, 1);
                    displayTodos(todos);
    
                });
                
                // 子要素を親要素に追加
                taskNode.statusNode.appendChild(taskNode.statusButtonNode);
                taskNode.deleteNode.appendChild(taskNode.deleteButtonNode);
                taskNode.row.appendChild(taskNode.idNode);
                taskNode.row.appendChild(taskNode.commentNode);
                taskNode.row.appendChild(taskNode.statusNode);
                taskNode.row.appendChild(taskNode.deleteNode);
                todoNode.appendChild(taskNode.row);
                
            }

        });

        // 新規タスク入力クリア
        task.value = '';

    }

    // 新規タスクが追加されたときのイベント
    document.getElementById('add').addEventListener('click', () => {
    
        const todo = {
            task: task.value,
            status: '作業中'
        };

        todos.push(todo);
        displayTodos(todos);
      
    });

    // 表示する内容（ラジオボタン）に変更があったときのイベント
    radioNodes.forEach(radioNode => {
        radioNode.addEventListener('click', () => {
            displayTodos(todos);
        });
    });

}