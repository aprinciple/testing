const quiz = document.querySelector('.quiz');
if (quiz) {
  let items = quiz.querySelectorAll('.quiz__item');
  let progressTrack = quiz.querySelector('.quiz__progress-track');
  let progressPrecent = quiz.querySelector('.quiz__progress-precent');
  let buttonPrev = quiz.querySelector('.quiz__button--prev');
  let buttonNext = quiz.querySelector('.quiz__button--next');
  let wrapper = quiz.querySelector('.quiz__wrapper');
  let thanks = quiz.querySelector('.quiz__thanks');

  let index = 0;
  let precent = 100 / items.length;
  progressPrecent.textContent = `${parseInt(precent)}%`;
  progressTrack.style.width = `${parseInt(precent)}%`;

  function progress(direction) {
    if (direction === 'next') {
      precent += 100 / items.length;
    }
    if (direction === 'prev') {
      precent -= 100 / items.length;
    }

    progressPrecent.textContent = `${parseInt(precent)}%`;
    progressTrack.style.width = `${parseInt(precent)}%`;
  }

  items[0].style.display = 'block';

  buttonPrev.addEventListener('click', (e) => {
    if(index > 0) {
      items.forEach(item => item.style.display = 'none');
      items[--index].style.display = 'block';
      progress('prev');
    }
  });

  buttonNext.addEventListener('click', (e) => {
    if(index !== items.length - 1) {
      items.forEach(item => item.style.display = 'none');
      items[++index].style.display = 'block';
      progress('next');
    } else {
      showThanks();
    }
  });

  function showThanks() {
    if(index === items.length - 1) {
      wrapper.style.display = 'none';
      quiz.classList.add('quiz--result');
      thanks.style.display = 'block';
    } else {
      wrapper.style.display = 'block';
      quiz.classList.remove('quiz--result');
      thanks.style.display = 'none';
    }
  }
}