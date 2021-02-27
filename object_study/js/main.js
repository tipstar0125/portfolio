'use strict';

{
    function task_display(tasks) {
        console.log('=========================');
        console.log('現在持っているタスク一覧');
        console.log('=========================');

        tasks.forEach((element, index) => {
            console.log(`${index}: [内容]${element.task}、[ジャンル]${element.genre}`);
        });
    }

    const tasks = [
        {task: '机を片付ける', genre: '掃除'},
        {task: '牛乳を買う', genre: '買い物'},
        {task: '散歩する', genre: '運動'},
    ];

    task_display(tasks);
  
    while (true) {

        const answer = prompt('「確認, 追加, 削除, 終了」の4つのいずれかを入力してください');

        if (answer === '確認') {

            task_display(tasks);

        } else if (answer === '追加') {

            const task = prompt('タスクを入力してください');
            const genre = prompt('ジャンルを入力してください');
            tasks.push({task: task, genre: genre});
            task_display(tasks);
            alert('新しいタスクを追加しました');

        } else if (answer === '削除') {

            const task_num = prompt('削除したいタスクの番号を入力してください');
            tasks.splice(Number(task_num), 1);
            task_display(tasks);

        } else if (answer === '終了') {
            break;

        }
    }

}
