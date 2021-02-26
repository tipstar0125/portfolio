'use strict';

{
    function task_display(tasks) {
        console.log('=========================');
        console.log('現在持っているタスク一覧');
        console.log('=========================');

        tasks.forEach((element, index) => {
            console.log(`${index}: ${element}`)
        });
        
    }

    const tasks = ['掃除', '買い物', '散歩'];
    task_display(tasks);

    while (true) {

        const answer = prompt('「確認, 追加, 削除, 終了」の4つのいずれかを入力してください');

        if (answer === '確認') {
            task_display(tasks);
        } else if (answer === '追加') {
            const task = prompt('タスクを入力してください');
            tasks.push(task);
            task_display(tasks);
        } else if (answer === '削除') {
            const task_num = prompt('削除したいタスクの番号を入力してください');
            tasks.splice(Number(task_num), 1);
            task_display(tasks);
        } else if (answer === '終了') {
            break;
        }

    }
   
}
