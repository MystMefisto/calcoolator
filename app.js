const buttons = document.querySelector('.output');

buttons.addEventListener('click', e => {
    //Push button animation
    if (e.target.classList.contains('button')) {
        console.log(e.target.textContent);
        e.target.classList.add('click-effect');
        
        // Eliminar la clase "click-effect" después de la animación
        e.target.addEventListener('animationend', () => {
            e.target.classList.remove('click-effect');
        });
    }
});