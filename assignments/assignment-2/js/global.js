window.addEventListener('load', function() {
    
    document.querySelector('.menu__open').addEventListener('click', () => {
      document.querySelector('.menu').classList.add('active');
    });

    document.querySelector('.menu__close').addEventListener('click', () => {
      document.querySelector('.menu').classList.remove('active');
    });

})