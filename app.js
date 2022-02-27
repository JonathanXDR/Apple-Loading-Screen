window.onload = function () {
  const chimes = [
    'media/Mac_mini_2020_Startup.m4a',
    'media/MacBook_Air_M1_2020_Startup.m4a',
    'media/Pre-T2-based_Mac_Startup.m4a',
    'media/T2-based_Mac_Startup.m4a',
  ];

  // Get random chime
  const item = chimes[Math.floor(Math.random() * chimes.length)];

  // set audio source
  document.getElementById('audio').src = item;
};
