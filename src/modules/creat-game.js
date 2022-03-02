const createGame = async (url, gameName) => {
  let gameUrl = '';
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: gameName,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      gameUrl = url + response.result.split(' ')[3];
    });

  return gameUrl;
};

export default createGame;
