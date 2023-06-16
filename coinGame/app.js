function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
      aRect.top + aRect.height < bRect.top ||
      aRect.top > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    );
  }

  const avatar = document.querySelector("#player");
  const coin = document.querySelector("#coin");
  const score = document.querySelector("#score")

  window.addEventListener("keyup", function (e) {
    console.log(e.key);
    if (e.key === "ArrowDown") {
      const currTop = extractPosition(avatar.style.top);
      avatar.style.top = `${currTop + 50}px`;
    } else if (e.key === "ArrowUp") {
      const currTop = extractPosition(avatar.style.top);
      avatar.style.top = `${currTop - 50}px`;
    } else if (e.key === "ArrowRight") {
      const currLeft = extractPosition(avatar.style.left);
      avatar.style.left = `${currLeft + 50}px`;
      avatar.style.transform = 'scale(1,1)'
    } else if (e.key === "ArrowLeft") {
      const currLeft = extractPosition(avatar.style.left);
      avatar.style.left = `${currLeft - 50}px`;
      avatar.style.transform = 'scale(-1,1)'
    }
    if (isTouching(avatar, coin)){
      score.innerHTML = `Score: ${updateScore(score)}`;
      moveCoin();
    }
  });

  const extractPosition = (pos) => {
    if (!pos) return 100;
    // removing the 'px' from string
    return parseInt(pos.slice(0, -2));
  };

  const updateScore = (score) => {
      if (!score) return 0;
      return parseInt(score.innerText.slice(6)) + 1;
  }

  const moveCoin = () => {
      const x = Math.floor(Math.random() * window.innerWidth)
      const y = Math.floor(Math.random() * window.innerHeight)
      coin.style.top = `${y}px`
      coin.style.left = `${x}px`
  }

  moveCoin()
