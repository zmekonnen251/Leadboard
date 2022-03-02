import './style.css';

const scoreList = document.querySelector('.score-list');
const addScoreBtn = document.querySelector('.submit-button');
const refreshBtn = document.querySelector('.refresh');
const loadingText = document.querySelector('.loading');

// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const urlWithId = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/K2w3YZM4MqdQ5Mz1JwCS/scores/';

addScoreBtn.onclick = async (e) => {
  e.preventDefault();
  const userName = document.querySelector('.name').value;
  const userScore = document.querySelector('.score').value;

  await fetch(urlWithId, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
  })
    .then((result) => result.json())
    .then((response) => response);

  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

const getScore = async () => {
  loadingText.innerHTML = 'Wait me I am Loading the Scores';
  await fetch(urlWithId)
    .then((response) => response.json())
    .then((json) => {
      const sortedScoreList = json.result.sort((a, b) => b.score - a.score);

      sortedScoreList.forEach((element) => {
        const li = document.createElement('li');
        li.innerHTML = `${element.user} : ${element.score}`;
        scoreList.appendChild(li);
      });
    });
  loadingText.innerHTML = '';
};

getScore();
refreshBtn.onclick = () => {
  window.location.reload();
};
