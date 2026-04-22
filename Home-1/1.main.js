const tourList = [{
        name: "Manhattan Walk",
        loc: "NY, USA",
        price: "$13.00",
        old: "$20.00"
    },
    {
        name: "American Parks",
        loc: "Thailand",
        price: "$20.00",
        old: "$40.00"
    },
    {
        name: "Modern Stefano",
        loc: "Italy",
        price: "$40.00",
        old: "$50.00"
    },
    {
        name: "Vatican Museums",
        loc: "Switzerland",
        price: "$60.00",
        old: "$100.00"
    },
    {
        name: "Eternal Dubai",
        loc: "Dubai, Emirates",
        price: "$150.00",
        old: "$250.00"
    },
    {
        name: "Pulau Seribu",
        loc: "Indonesia",
        price: "$300.00",
        old: "$350.00"
    },
    {
        name: "Southwestern Akam",
        loc: "Switzerland",
        price: "$160.00",
        old: "$240.00"
    },
    {
        name: "Win Cities Opposite",
        loc: "Australia",
        price: "$140.00",
        old: "$160.00"
    }
];
tourList.forEach(t => {
    document.write(`
                        <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition group">
                            <div class="relative h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                                <span class="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-bold">Featured</span>
                                <button class="absolute top-4 right-4 bg-white/80 p-2 rounded-full"><i data-lucide="heart" class="w-4 h-4"></i></button>
                            </div>
                            <div class="p-6">
                                <h3 class="font-bold mb-1 truncate">${t.name}</h3>
                                <p class="text-gray-400 text-xs flex items-center gap-1 mb-4"><i data-lucide="map-pin" class="w-3"></i> ${t.loc}</p>
                                <div class="flex justify-between items-center border-t pt-4">
                                    <div class="text-xs font-bold">
                                        <span class="text-gray-300 line-through mr-2">${t.old}</span>
                                        <span class="text-blue-600">${t.price}</span>
                                    </div>
                                    <div class="flex items-center gap-1 text-[10px] font-bold text-orange-400">
                                        <i data-lucide="star" class="w-3 fill-orange-400"></i> 4.5
                                    </div>
                                </div>
                            </div>
                        </div>
                        `);
});
lucide.createIcons();


    lucide.createIcons();

    const slides = [
        { image: './img/Сёрфер.jpg', title: 'Maldives Island', price: '$299' },
        { image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920', title: 'Bali Paradise', price: '$199' },
        { image: 'https://images.unsplash.com/photo-1506929113614-bb4885828aa5?q=80&w=1920', title: 'Hawaii Coast', price: '$350' },
        { image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1920', title: 'Phuket Beach', price: '$150' },
        { image: 'https://images.unsplash.com/photo-1544735749-2d2d355dc247?q=80&w=1920', title: 'Bora Bora', price: '$499' },
        { image: 'https://images.unsplash.com/photo-1533760881658-c7952219c623?q=80&w=1920', title: 'Seychelles', price: '$420' },
        { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920', title: 'Bahamas Bay', price: '$280' }
    ];

    let currentSlide = 0;
    const heroSection = document.querySelector('.hero-section');
    const heroTitle = heroSection.querySelector('h1');
    const heroPrice = heroSection.querySelector('.font-bold.text-2xl');
    const prevBtn = heroSection.querySelector('button.absolute.left-40');
    const nextBtn = heroSection.querySelector('button.absolute.right-40');

    function updateSlide(index) {
        currentSlide = index;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (currentSlide >= slides.length) currentSlide = 0;

        const slide = slides[currentSlide];
        
        heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${slide.image}')`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
        
        heroTitle.textContent = slide.title;
        heroPrice.textContent = slide.price;
    }

    prevBtn.addEventListener('click', () => updateSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => updateSlide(currentSlide + 1));

    updateSlide(0);


    const filterTabs = document.querySelectorAll('.hero-section .bg-white .flex.gap-8 button');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => {
                t.classList.remove('tab-active', 'text-black');
                t.classList.add('text-gray-400');
            });
            tab.classList.add('tab-active', 'text-black');
            tab.classList.remove('text-gray-400');
        });
    });


    const tourTabs = document.querySelectorAll('.max-w-\\[1440px\\] .flex.flex-wrap button');
    
    tourTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tourTabs.forEach(t => t.style.color = '#6b7280'); // серый цвет по умолчанию
            tab.style.color = '#612af5'; // фиолетовый для активного
        });
    });


    const searchBtn = document.querySelector('button.bg-orange-600');
    searchBtn.addEventListener('click', () => {
        const destination = document.querySelector('input[placeholder="Where are you going?"]').value;
        if(destination) {
            alert('Searching for ' + destination + '...');
        } else {
            alert('Please enter a destination');
        }
    });


    const menuIcon = document.querySelector('[data-lucide="menu"]');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('hidden');
        nav.classList.toggle('flex');
        nav.classList.toggle('absolute');
        nav.classList.toggle('top-20');
        nav.classList.toggle('left-0');
        nav.classList.toggle('w-full');
        nav.classList.toggle('bg-black/90');
        nav.classList.toggle('p-6');
        nav.classList.toggle('flex-col');
        nav.classList.toggle('space-y-4');
    });

    const actionButtons = document.querySelectorAll('button');
    actionButtons.forEach(btn => {
        btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.95)');
        btn.addEventListener('mouseup', () => btn.style.transform = 'scale(1)');
    });

