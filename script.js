'use strict';

document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('section__svg')) {
      const copyText = e.target.closest('.section__column');
      navigator.clipboard.writeText(copyText.textContent.replace(/\s/g, ''))
        .then(() => {
          const parentEl = e.target.closest('.section');
          const childEl = document.createElement('div');
          childEl.classList.add("user-alert");
          childEl.innerHTML = `<p class="user-alert__text">Сopied! &#128521;</p>`;
          parentEl.append(childEl);
          setTimeout(() => {
            childEl.remove();
          }, 2000);
        })
        .catch(err => {
          console.log(err);
        });
    };
  });
});