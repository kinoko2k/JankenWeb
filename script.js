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

  if (consecutiveWins === 10) { // 勝利数が10になった時の確認
    showPopup('🎉おめでとう！10連勝達成！🎉');
    consecutiveWins = 10;
    consecutiveWins = 0;
    document.getElementById('consecutiveWins').innerHTML = '連続勝利数: ' + consecutiveWins;
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
  popupElement.className = 'popup';
  popupElement.textContent = text;
  document.body.appendChild(popupElement);

  setTimeout(function() {
    popupElement.parentNode.removeChild(popupElement);
  }, 5000); // 5000ms
}