const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
    alert(` ширина экрана девайса\\монитора - ${window.screen.width},
    высота экрана девайса\\монитора - ${window.screen.height},
    ширина экрана с учётом полосы прокрутки - ${window.innerWidth},
    высота экрана с учётом полосы прокрутки - ${window.innerHeight},
    ширина экрана без учёта полосы прокрутки - ${document.documentElement.clientWidth},
    высота экрана без учёта полосы прокрутки - ${document.documentElement.clientHeight}`)
});
