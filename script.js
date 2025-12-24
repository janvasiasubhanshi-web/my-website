// Snow effect
const canvas = document.getElementById('snowCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const snowflakes = [];
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 1
    });
  }

  function drawSnow() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
      const f = snowflakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    moveSnow();
  }

  let angle = 0;
  function moveSnow() {
    angle += 0.01;
    for (let i = 0; i < snowflakes.length; i++) {
      const f = snowflakes[i];
      f.y += Math.cos(angle + f.d) + 1 + f.r/2;
      f.x += Math.sin(angle) * 2;

      if (f.x > width + 5 || f.x < -5 || f.y > height) {
        if (i % 3 > 0) {
          snowflakes[i] = {x: Math.random()*width, y: -10, r: f.r, d: f.d};
        } else {
          if (Math.sin(angle) > 0) {
            snowflakes[i] = {x: -5, y: Math.random()*height, r: f.r, d: f.d};
          } else {
            snowflakes[i] = {x: width+5, y: Math.random()*height, r: f.r, d: f.d};
          }
        }
      }
    }
  }

  setInterval(drawSnow, 25);
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

// Gift click logic
function openGift(number) {
  const content = document.getElementById('giftContent');
  if (number === 1) {
    content.innerHTML = "🌟 Merry Christmas! 🌟<br>आपको क्रिसमस की शुभकामनाएँ!";
  } else if (number === 2) {
    content.innerHTML = "प्रिय मित्र,<br>आपको क्रिसमस की ढेरों शुभकामनाएँ!";
  } else if (number === 3) {
    content.innerHTML = "☃️ Snowy Christmas Room ☃️<br>सांता और उनका रथ आपके लिए!";
  }
}
