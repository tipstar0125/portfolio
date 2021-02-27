'use strict';

{
    class Task {
        constructor(task, genre) {
            this.task = task;
            this.genre = genre;
        }

        show() {
            return `[内容]${this.task}、[ジャンル]${this.genre}`
        }
    }

    function task_display(tasks) {
        console.log('=========================');
        console.log('現在持っているタスク一覧');
        console.log('=========================');

        tasks.forEach((element, index) => {
            console.log(`${index}: ${element.show()}`);
            
        });
    }

    const tasks = [
        new Task('机を片付ける', '掃除'),
        new Task('牛乳を買う', '買い物'),
        new Task('散歩する', '運動'),
    ]

    task_display(tasks);

    while (true) {

        const answer = prompt('「確認, 追加, 削除, 終了」の4つのいずれかを入力してください');

        if (answer === '確認') {

            task_display(tasks);

        } else if (answer === '追加') {

            const task = prompt('タスクを入力してください');
            const genre = prompt('ジャンルを入力してください');
            tasks.push(new Task(task, genre));
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
