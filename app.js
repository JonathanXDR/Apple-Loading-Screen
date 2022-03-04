window.onload = function () {
  const chimePaths = [
    'media/Mac_mini_2020_Startup.m4a',
    'media/MacBook_Air_M1_2020_Startup.m4a',
    'media/Pre-T2-based_Mac_Startup.m4a',
    'media/T2-based_Mac_Startup.m4a',
  ];

  // Get random path
  const randomPath = chimePaths[Math.floor(Math.random() * chimePaths.length)];

  // set audio source
  const chime = document.getElementById('audioChime');
  chime.src = randomPath;
  // chime.play();
};
