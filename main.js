/*   マイルストーン１   */
// alertで'You got 5 guesses. Guess 1 to 5'と言うメッセージを表示させ、１から５までの数値を当てるよう指示する。
alert('You got 5 guesses. Guess 1 to 5');

const numbers = [1, 3, 4, 5];

// 答えの数値を2で用意
let answer = [2];

// promptで'What do you guess?'と言うメッセージとともに、記入欄を表示させる
let userInput = prompt('What do you guess?');

// forループで１から５までの数値で、答えの2が当たるまで推測を促すpromptを表示させる。
// ヒント１：if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。
// ヒント２：外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。
for (let i = 0; i < 4; i++) {
  if (userInput == answer) {
  alert('Good job! See what happens next :)');
  const image = document.getElementById('image'); 
  image.innerHTML = `
    <h1>You made it! 🎮</h1>
    <iframe src="https://giphy.com/embed/11sBLVxNs7v6WA" width="480" height="217" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheer-cheering-11sBLVxNs7v6WA"></a></p>
  `;
  break;
  } else if (userInput == numbers[0] || userInput == numbers[1] || userInput == numbers[2] || userInput == numbers[3]) {
    userInput = prompt('Ops! Maybe, another try?');
  } else {
    userInput = prompt('Use 1 to 5 guess an answer!');
  }
}
