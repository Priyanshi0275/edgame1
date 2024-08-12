
  let characterLeftPos = parseInt(
    window.getComputedStyle(character).getPropertyValue('left')
  );
  let blockLeftPos = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );

  let blockTopPos = parseInt(
    window.getComputedStyle(block).getPropertyValue('top')
  );

  if (
    characterLeftPos == blockLeftPos &&
    blockTopPos > 420 &&
    blockTopPos < 530
  ) {
    character.style.left = 110 + 'px';
    lost = true;
    topScoreHandler(parseInt(score.innerText), parseInt(highScore.innerText));
    score.innerText = 0;
  }
});

window.addEventListener('load', () => {
  if (localStorage.getItem('High Score')) {
    highScore.innerText = localStorage.getItem('High Score');
  } else {
    localStorage.setItem('High Score', 0);
    highScore.innerText = localStorage.getItem('High Score');
  }
});