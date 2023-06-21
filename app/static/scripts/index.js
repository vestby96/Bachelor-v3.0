let h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', e => {
    e.target.style.color = 'green';
});
h1.addEventListener('mouseleave', e => {
    e.target.style.color = '';
});