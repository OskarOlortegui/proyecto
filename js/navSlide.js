const navSlide = () => {
        const burger = document.querySelector('.burger');
        const ul = document.querySelector('ul');

        burger.addEventListener('click', () =>{

            ul.classList.toggle('nav-active');

            burger.classList.toggle('equis');

        });

}
navSlide();
