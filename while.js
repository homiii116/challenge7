/*   マイルストーン１   */
// alertで'You got 5 guesses. Guess 1 to 5'と言うメッセージを表示させ、１から５までの数値を当てるよう指示する。
function quiz() {
	alert('You got 5 guesses. Guess 1 to 5');

	const numbers = [1, 3, 4, 5];

// 答えの数値を2で用意
	let answer = [2];

// promptで'What do you guess?'と言うメッセージとともに、記入欄を表示させる
	let userInput = prompt('What do you guess?');

/*   マイルストーン2   */
// for文で完成したら、for文箇所をコメントアウトし、while文で書き換えてみましょう。
	let i = 0;

	while (i < 4) {
		if (userInput == answer) {
		alert('Good job! See what happens next :');
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
		i++;
	}
}
quiz();
