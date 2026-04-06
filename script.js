const texts = document.querySelectorAll('.text');
const headerbg = document.getElementById('headerbg');
const cards = document.querySelectorAll('.card');
const cardimgs = document.querySelectorAll('.cardimg');
const aboutimgdiv = document.getElementById('aboutimgdiv');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.target === headerbg) {
            headerbg.classList.toggle('headerbganimation', entry.isIntersecting);

        }

       else if(entry.target.classList.contains('text'))
       {
         entry.target.classList.toggle('textanimation', entry.isIntersecting);
       }
         else if(entry.target.classList.contains('card'))
         {
            entry.target.classList.toggle('cardanimation', entry.isIntersecting);
            }
             else if(entry.target.classList.contains('cardimg'))
         {
            entry.target.classList.toggle('cardimganimation', entry.isIntersecting);
            }
                 else if(entry.target === aboutimgdiv)
         {
            entry.target.classList.toggle('aboutimgdivanimation', entry.isIntersecting);
            };
    });
}, {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
});

texts.forEach((text) => observer.observe(text));
observer.observe(headerbg);
cards.forEach((card) => observer.observe(card));
cardimgs.forEach((cardimg) => observer.observe(cardimg));
observer.observe(aboutimgdiv);

window.addEventListener('scroll', () => {

let windowY = window.scrollY;
let nav = document.querySelector('nav');


    if ( windowY > 100) {
        nav.classList.add('bg-black');
        nav.classList.remove('bg-transparent');
    } else {
        nav.classList.remove('bg-black');
        nav.classList.add('bg-transparent   ');
    }
});



