const p1 = {
  button: document.querySelector('#btnPlayer1'),
  display: document.querySelector('#scorePlayer1')
};
const p2 = {
  button: document.querySelector('#btnPlayer2'),
  display: document.querySelector('#scorePlayer2')
};

const sizeOfSet = document.querySelector('#sizeOfSet');
const btnReset = document.querySelector('#btnReset');

function updateScores(player,opponent) {
  player.display.innerText = `${parseInt(player.display.innerText) + 1}`;
  if (player.display.innerText === sizeOfSet.value) {
    player.display.classList.add('text-success');
    opponent.display.classList.add('text-danger');
    player.button.disabled = true;
    opponent.button.disabled = true;
  }
}

function reset(){
  for(let p of [p1,p2]){
    p.display.classList.remove('text-success', 'text-danger');
    p.display.innerText = '0';
    p.button.disabled = false;
  }
}

p1.button.addEventListener('click', function(){
  updateScores(p1,p2);
});

p2.button.addEventListener('click', function(){
  updateScores(p2,p1);
});

btnReset.addEventListener('click', reset);

sizeOfSet.addEventListener('change', reset);