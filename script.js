var consecutiveWins = 0;

function playGame(playerChoice) {
  var choices = ['グー', 'パー', 'チョキ'];
  var computerChoice = choices[Math.floor(Math.random() * 3)];

  var result = determineWinner(playerChoice, computerChoice);

  if (result === 'あなたの勝ち！') {
    consecutiveWins++;
  } else {
    consecutiveWins = 0;
  } 

  document.getElementById('result').innerHTML = 'あなたの選択: ' + playerChoice + '<br>コンピュータの選択: ' + computerChoice + '<br><br>' + result;
  document.getElementById('consecutiveWins').innerHTML = '連続勝利数: ' + consecutiveWins;

  if (consecutiveWins === 2) { // 勝利数が10になった時の確認
    showPopup('🎉おめでとう！10連勝達成！🎉');
    consecutiveWins = 10; 
    consecutiveWins = 0;
    document.getElementById('consecutiveWins').innerHTML = '連続勝利数: ' + consecutiveWins;
  }
  
  if (consecutiveWins === 15) { // konamiの例のコードを動かす。
    document.body.style.backgroundColor = 'blue'; // 画面を青にする。指定するなら、"#ff"かrgbaで可能。
  }
}


function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return '引き分け！';
  } else if (
    (playerChoice === 'グー' && computerChoice === 'チョキ') ||
    (playerChoice === 'パー' && computerChoice === 'グー') ||
    (playerChoice === 'チョキ' && computerChoice === 'パー')
  ) {
    return 'あなたの勝ち！';
  } else {
    return 'コンピュータの勝ち！';
  }
}

function showPopup(text) {
  var popupElement = document.createElement('div');
  popupElement.className = 'popup'; // htmlに<div>のpopupクラスを追加する
  popupElement.textContent = text;
  document.body.appendChild(popupElement);

  setTimeout(function() {
    popupElement.parentNode.removeChild(popupElement);
  }, 5000); // 5000ms
}

// konamiの例のコード
var konamiCode = [];
var konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(event) {
  konamiCode.push(event.keyCode); // キーが押される。
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }
  if (arraysEqual(konamiCode, konamiSequence)) {
    consecutiveWins = 15; // 連続勝利数を15に設定する。
    document.getElementById('consecutiveWins').innerHTML = '連続勝利数: ' + consecutiveWins;
    document.body.style.backgroundColor = 'blue'; // 画面が青になって、連続勝利数が15に設定される。
  }
});

// キー確認
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) { // 違う場合の判定
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}