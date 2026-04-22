document.addEventListener('DOMContentLoaded', () => {
    const leftSide = document.querySelector('.content-left');
    const rightSide = document.querySelector('.content-right');
    
    leftSide.style.opacity = '0';
    leftSide.style.transform = 'translateX(-50px)';
    rightSide.style.opacity = '0';
    rightSide.style.transform = 'translateX(50px)';

    setTimeout(() => {
        leftSide.style.transition = 'all 1s ease-out';
        leftSide.style.opacity = '1';
        leftSide.style.transform = 'translateX(0)';

        rightSide.style.transition = 'all 1s ease-out';
        rightSide.style.opacity = '1';
        rightSide.style.transform = 'translateX(0)';
    }, 100);
});