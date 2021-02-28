'use strict';

{
    // 最小公倍数
    function lcm(a,b) {
        const g = (n, m) => m ? g(m, n % m) : n
        return a * b / g(a, b)
    }

    // 出力クリア
    function deleteView() {

        const outputNodes = document.querySelectorAll('p.marginzero');

        if (outputNodes) {
            outputNodes.forEach(outputNode => {
                result.removeChild(outputNode);
            });
        }

    }

    // 結果出力
    function resultView(output) {

        const result = document.getElementById('result');

        const outputNode = document.createElement('p');
        outputNode.className = 'marginzero';
        outputNode.textContent = output;
        result.appendChild(outputNode);
    }

    document.getElementById('button').addEventListener('click', () => {

        const fizzNum = Number(document.getElementById('fizz').value);
        const buzzNum = Number(document.getElementById('buzz').value);
        const lcmFizzBuzz = lcm(fizzNum, buzzNum);
        const numberList = [];


        if (Number.isInteger(fizzNum) && Number.isInteger(buzzNum)
            && fizzNum > 0 && buzzNum > 0
            && fizzNum < 100 && buzzNum < 100) {

            let i = 1;
            let nfizz = fizzNum;
            let nbuzz = buzzNum;

            while (nfizz < 100 || nbuzz <100) {

                // 存在しない、かつ100より小さい整数を追加
                if (numberList.indexOf(nfizz) === -1 && nfizz < 100) {
                    numberList.push(nfizz);
                }

                if (numberList.indexOf(nbuzz) === -1 && nbuzz < 100) {
                    numberList.push(nbuzz);
                }

                nfizz += fizzNum;
                nbuzz += buzzNum;
                i += 1;
            }

            // 昇順
            numberList.sort(
                function(a, b){
                  return (a < b ? -1 : 1);
                }
            );

            // 出力クリア
            deleteView();

            for (const num of numberList) {
                
                if (num % lcmFizzBuzz === 0) {
                    resultView(`FizzBuzz ${num}`);
                } else if (num % fizzNum === 0) {
                    resultView(`Fizz ${num}`);
                } else if (num % buzzNum === 0) {
                    resultView(`Buzz ${num}`);
                }
            }


        } else {
            deleteView();
            resultView('100より小さい正の自然数を入力して下さい');
        }

    });

}