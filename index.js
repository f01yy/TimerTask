const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const DIGITS_STRING = '0123456789';

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let remainingSeconds = seconds;

    let hh = Math.floor(seconds / 3600);
    let mm = Math.floor((seconds - hh * 3600) / 60);
    let ss = seconds - hh * 3600 - mm * 60;

    timerEl.innerHTML = `${hh < 10 ? '0' + hh : hh}:${
      mm < 10 ? '0' + mm : mm
    }:${ss < 10 ? '0' + ss : ss}`;

    const timer = setInterval(() => {
      remainingSeconds -= 1;

      hh = Math.floor(remainingSeconds / 3600);
      mm = Math.floor((remainingSeconds - hh * 3600) / 60);
      ss = remainingSeconds - hh * 3600 - mm * 60;

      timerEl.innerHTML = `${hh < 10 ? '0' + hh : hh}:${
        mm < 10 ? '0' + mm : mm
      }:${ss < 10 ? '0' + ss : ss}`;
    }, 1000);

    setTimeout(() => clearInterval(timer), seconds * 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = [...inputEl.value]
    .filter((char) => DIGITS_STRING.includes(char))
    .join('');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
