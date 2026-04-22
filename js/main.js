(function(){
    "use strict";

    // ---------- МОДАЛЬНЫЕ ОКНА ----------
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeLogin = document.getElementById('closeLoginModal');
    const searchModal = document.getElementById('searchModal');
    const searchBtn = document.getElementById('searchBtn');
    const closeSearch = document.getElementById('closeSearchModal');
    const closeSearch2 = document.getElementById('closeSearchBtn2');

    function openModal(modal) {
        modal.classList.remove('invisible', 'opacity-0');
        modal.classList.add('visible', 'opacity-100');
        modal.querySelector('.transform')?.classList.remove('scale-95');
        modal.querySelector('.transform')?.classList.add('scale-100');
    }
    function closeModal(modal) {
        modal.classList.add('invisible', 'opacity-0');
        modal.classList.remove('visible', 'opacity-100');
        modal.querySelector('.transform')?.classList.add('scale-95');
        modal.querySelector('.transform')?.classList.remove('scale-100');
    }

    loginBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(loginModal); });
    closeLogin.addEventListener('click', () => closeModal(loginModal));
    loginModal.addEventListener('click', (e) => { if(e.target === loginModal) closeModal(loginModal); });

    // поиск
    searchBtn.addEventListener('click', () => {
        const dest = document.getElementById('destinationInput').value.trim();
        const content = document.getElementById('searchResultsContent');
        if(dest) {
            content.innerHTML = `<p>🔍 Ищем туры в <strong>${dest}</strong>...</p><ul class="mt-3 space-y-2 text-sm"><li>🇫🇷 Париж — от $540</li><li>🇮🇹 Рим — от $620</li><li>🇺🇸 Нью-Йорк — от $799</li></ul><p class="mt-3 text-green-600">✨ Найдено специальное предложение!</p>`;
        } else {
            content.innerHTML = `<p>🌍 Показаны популярные направления:</p><ul class="mt-3 space-y-2 text-sm"><li>🗼 Париж</li><li>🏛 Рим</li><li>🗽 Нью-Йорк</li></ul>`;
        }
        openModal(searchModal);
    });
    closeSearch.addEventListener('click', () => closeModal(searchModal));
    closeSearch2.addEventListener('click', () => closeModal(searchModal));
    searchModal.addEventListener('click', (e) => { if(e.target === searchModal) closeModal(searchModal); });

    // "See details" и "View more"
    document.querySelectorAll('.seeDetailsBtn').forEach(btn => btn.addEventListener('click', () => alert('🎉 Скидка 40% на летние туры! Успейте забронировать.')));
    document.getElementById('viewMoreLink').addEventListener('click', (e) => { e.preventDefault(); alert('📰 Больше статей появится в ближайшее время!'); });

    // Подписка в футере
    document.getElementById('subscribeBtn').addEventListener('click', () => {
        const email = document.getElementById('subscribeEmail').value;
        if(email.includes('@')) alert(`📧 Спасибо! Подписка оформлена на ${email}`);
        else alert('Пожалуйста, введите корректный email.');
    });

    // ---------- ИЗБРАННОЕ (сердечки) и счетчик корзины ----------
    const cartCountSpan = document.getElementById('cartCount');
    let cartItems = 0;
    function updateCartCount() { cartCountSpan.textContent = cartItems; }

    document.querySelectorAll('.heartToggle').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const icon = this.querySelector('i');
            if (icon.classList.contains('heart-active')) {
                icon.classList.remove('heart-active');
                icon.style.color = '';
                cartItems = Math.max(0, cartItems - 1);
            } else {
                icon.classList.add('heart-active');
                icon.style.color = '#ef4444';
                cartItems++;
            }
            updateCartCount();
        });
    });

    // кнопка корзины (просто показывает кол-во)
    document.getElementById('cartBtn').addEventListener('click', () => {
        alert(`🛒 В избранном ${cartItems} ${cartItems === 1 ? 'тур' : 'тура/ов'}.`);
    });

    // Плавный скролл для навигации
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if(target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Форма логина (демо)
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('👋 Демо-вход. Добро пожаловать в Travox!');
        closeModal(loginModal);
    });

    // Клик по заголовкам туров
    document.querySelectorAll('.group h4').forEach(h => {
        h.addEventListener('click', () => alert('🌴 Подробности тура скоро появятся.'));
    });

    updateCartCount();
    console.log('✅ Все кнопки работают, модальные окна готовы, без ошибок!');
})();