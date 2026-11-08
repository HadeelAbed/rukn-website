
// Mobile Navigation

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {

    const open = nav.classList.toggle('open');

    toggle.setAttribute('aria-expanded', String(open));

});

// Close menu after clicking a link

nav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

        nav.classList.remove('open');

        toggle.setAttribute('aria-expanded', 'false');

    });

});

// Scroll Reveal Animation

const items = document.querySelectorAll(
    '.numbers > div, .service-list article, .project, .steps article'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

items.forEach((item, index) => {

    item.classList.add('reveal');

    item.style.transitionDelay =
        `${(index % 4) * 70}ms`;

    observer.observe(item);

});
