'use strict';

{
    class View {
        constructor(intro, genre, difficulty, explain, btn_sections, eventFunc, answer_number) {
            this.intro = intro;
            this.genre = genre;
            this.difficulty = difficulty;
            this.explain = explain;
            this.btn_sections = btn_sections;
            this.eventFunc = eventFunc;
            this.answer_number = answer_number;

        }

        view() {
            const introNode = document.getElementById('intro');
            const genreNode = document.getElementById('genre');
            const difficultyNode = document.getElementById('difficulty');
            const explainNode = document.getElementById('explain');
            const btnSectionNode = document.getElementById('btn_sections');
            const btnNodes = document.querySelectorAll('button');
            
            // ボタン以外の表示入力
            introNode.textContent = this.intro;
            genreNode.textContent = this.genre;
            difficultyNode.textContent = this.difficulty;
            explainNode.textContent = this.explain;

            // ボタン表示クリア
            if (btnNodes) {
                btnNodes.forEach(btnNode => {
                    btnSectionNode.removeChild(btnNode);
                });
            }

            // ボタン表示
            if (this.btn_sections) {
                this.btn_sections.forEach((btn, index) => {
                    const btnNode = document.createElement('button');
                    btnNode.id = index;
                    btnNode.textContent = btn;
                    btnNode.className = 'btn';

                    // 正解ボタンにはtrue、不正解ボタンにはfalseを引数として渡す
                    if (index === this.answer_number) {
                        btnNode.addEventListener('click', this.eventFunc(true));
                    } else {
                        btnNode.addEventListener('click', this.eventFunc(false));
                    }
                    
                    btnSectionNode.appendChild(btnNode);
                });
            }
        }
    }

    class Quiz {
        constructor(correct_answer, incorrect_answers) {
            this.correct_answer = correct_answer;
            this.incorrect_answers = incorrect_answers;
            this.answer_number = 0;
            this.shuffled_answers = [];

        }

        // 選択肢をシャッフルして、シャッフル後の答え（番号）を格納
        choices_shuffle () {
            this.shuffled_answers = shuffle([this.correct_answer, ...this.incorrect_answers]);
            this.shuffled_answers.forEach((answer, index) => {
                if (answer === this.correct_answer) {
                    this.answer_number = index;
                }
            });
        }

    }

    // 配列シャッフル
    const shuffle = ([...array]) => {

        for (let i = array.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // 初期画面イベント設定
    const welcomeEvent = () => {
        return () => {
            getView.view();
            getQuiz("https://opentdb.com/api.php?amount=10&type=multiple");
        };
    };

    // クイズ情報取得
    const getQuiz = async (url) => {

        const response = await fetch(url);
        const json = await response.json();
        addView(json);

    };

    // クイズ情報より、Viewを設定し、問題1を表示
    const addView = (data) => {

        data.results.forEach((d, index) => {
            quizes.push(new Quiz(d.correct_answer, d.incorrect_answers));
            quizes[index].choices_shuffle();

            views.push(new View(`問題${index+1}`, `[ジャンル] ${d.category}`, `[難易度] ${d.difficulty}`, 
            htmlEntities(d.question, 'decode'), quizes[index].shuffled_answers, quizEvent, quizes[index].answer_number));
        });

        views[0].view();
    };

    // クイズボタンのイベント。正解ボタンが押されたら、correct_answer_numberを加算して、次の問題を表示。
    // 不正解なら、何もせずに次の問題を表示
    // 最後の問題の後は、ホームに戻るViewを表示
    const quizEvent = (IsAnswer) => {

        return () => {

            if (IsAnswer) {
                correct_answer_number++;
            }

            if (quiz_num < 9) {
                quiz_num++;
                views[quiz_num].view(); 
            } else {
                quiz_num = 0;
                const lastView = new View(`あなたの正解数は${correct_answer_number}です！！`, '', '', '再度チャレンジしたい場合は以下のボタンをクリック', ['ホームに戻る'], reloadFunc);
                lastView.view();
            }
        };   
    };

    // リロード
    const reloadFunc = () => {
        return () => {
            location.reload();
        };
    };

    // Entity decode
    const htmlEntities = (text, proc) => {
        const entities = [
            ['amp', '&'],
            ['apos', '\''],
            ['lt', '<'],
            ['gt', '>'],
        ];
        
        for (let i=0, max=entities.length; i<max; i++) {
            if ('encode' === proc) {
            text = text.replace(new RegExp(entities[i][1], 'g'), "&"+entities[i][0]+';').replace('"', '&quot;');
            } else {
            text = text.replace('&quot;', '"').replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
            }
        }
        return text;
    };

    // メインタスク
    // 初期画面とクイズ取得中画面の設定
    let quiz_num = 0;
    let correct_answer_number = 0;
    const views = [];
    const quizes = [];
    const welcomeView = new View('ようこそ', '', '', '以下のボタンをクリック', ['開始'], welcomeEvent);
    const getView = new View('取得中', '', '', '少々お待ちください');

    welcomeView.view();

}