'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const pageUp = document.getElementById('up');
  const sections = [...document.querySelectorAll('.section')];
  const links = [...document.querySelectorAll('.navbar__menu-link')];

  // IntersectionObserver options
  const options = {
    root: null,
    threshold: [1],
  };

  // IntersectionObserver
  const scrollNavbar = (entries) => {
    entries.forEach((elem) => {
      if (elem.isIntersecting) {
        links.forEach((elem) => {
          elem.classList.remove('navbar__menu-link--active');
        });
        const activeId = elem.target.id;
        const activeLink = document.querySelector(
          `.navbar__menu-link[href="#${activeId}"]`
        );
        if (activeLink) {
          activeLink.classList.add('navbar__menu-link--active');
        };
      };
    });
  };

  const sectionObserver = new IntersectionObserver(scrollNavbar, options);

  sections.forEach((elem) => {
    sectionObserver.observe(elem);
  });

  // Copy code to clipboard
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('section__copy')) {
      const copyText = e.target.closest('.section__column');
      navigator.clipboard.writeText(copyText.textContent.trim())
        .then(() => {
          const parentEl = e.target.closest('.section');
          const childEl = document.createElement('div');
          childEl.classList.add("user-alert");
          childEl.innerHTML = `<p class="user-alert__text">Сopied!</p>`;
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

  // Scroll to up page
  pageUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
