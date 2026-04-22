lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    
    const mobileMenuBtn = document.querySelector('button i[data-lucide="menu"]')?.parentElement;
    const nav = document.querySelector('nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            console.log('Открытие мобильного меню');
            alert('Мобильное меню в разработке!');
        });
    }

    const searchBtn = document.querySelector('button.bg-orange-brand');
    const inputs = document.querySelectorAll('.absolute.-bottom-16 input');

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const searchData = {
                destination: inputs[0]?.value,
                checkIn: inputs[1]?.value,
                checkOut: inputs[2]?.value,
                guests: inputs[3]?.value
            };

            if (!searchData.destination) {
                alert('Пожалуйста, введите направление для поиска!');
                return;
            }

            console.log('Данные поиска:', searchData);
            alert(`Ищем туры в: ${searchData.destination}`);
        });
    }

    let cartCount = 0;
    const cartBadge = document.querySelector('button.relative span');
    const bookButtons = document.querySelectorAll('button:contains("BOOK YOUR TRIP"), button:contains("SEE DETAILS")');
    // Т.к. поиск по тексту сложен, выберем кнопки через классы
    const actionButtons = document.querySelectorAll('.bg-accent, .bg-orange-brand');

    const updateCart = () => {
        cartCount++;
        if (cartBadge) {
            cartBadge.innerText = cartCount;
            cartBadge.classList.add('animate-bounce');
            setTimeout(() => cartBadge.classList.remove('animate-bounce'), 1000);
        }
    };

    document.querySelectorAll('.group.bg-white button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateCart();
            console.log('Товар добавлен в корзину');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const newsletterBtn = document.querySelector('footer button.bg-accent');
    const newsletterInput = document.querySelector('footer input[type="text"]');

    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', () => {
            const email = newsletterInput.value;
            if (email.includes('@')) {
                alert(`Спасибо за подписку, ${email}!`);
                newsletterInput.value = '';
            } else {
                alert('Пожалуйста, введите корректный email.');
            }
        });
    }

    document.querySelectorAll('button i[data-lucide="heart"]').forEach(heartBtn => {
        heartBtn.parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            if (icon.classList.contains('fill-red-500')) {
                icon.classList.remove('fill-red-500', 'text-red-500');
                icon.classList.add('text-gray-400');
            } else {
                icon.classList.add('fill-red-500', 'text-red-500');
                icon.classList.remove('text-gray-400');
            } 
        });
    });
});