const cars = [
    // Sports Cars (6)
    {
        id: 1,
        make: 'Porsche',
        model: '911',
        category: 'sports',
        year: 2022,
        price: 349,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1634673970798-a15ae56f6c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D',
        featured: true
    },
    {
        id: 2,
        make: 'Ferrari',
        model: '488 GTB',
        category: 'sports',
        year: 2021,
        price: 499,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        featured: true
    },
    {
        id: 3,
        make: 'Lamborghini',
        model: 'Huracan',
        category: 'sports',
        year: 2023,
        price: 429,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        featured: false
    },
    {
        id: 4,
        make: 'McLaren',
        model: '720S',
        category: 'sports',
        year: 2022,
        price: 459,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1715372028767-f89c9818634a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1jbGFyZW4lMjA3NTB8ZW58MHx8MHx8fDA%3D',
        featured: false
    },
    {
        id: 5,
        make: 'Audi',
        model: 'R8',
        category: 'sports',
        year: 2023,
        price: 399,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://cdn.pixabay.com/photo/2020/12/29/18/24/audi-r8-5871212_1280.jpg',
        featured: false
    },
    {
        id: 6,
        make: 'Chevrolet',
        model: 'Corvette',
        category: 'sports',
        year: 2023,
        price: 299,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://cdn.pixabay.com/photo/2015/07/03/02/07/corvette-829795_1280.jpg',
        featured: false
    },
    
    // SUVs (6)
    {
        id: 7,
        make: 'Mercedes',
        model: 'GLE',
        category: 'suv',
        year: 2023,
        price: 249,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_671,h_447,q_auto,c_fill,f_auto,fl_lossy/auto-client/ecaa6e87e7a08390caed8cb347de7d20/gle53.png',
        featured: true
    },
    {
        id: 8,
        make: 'Range Rover',
        model: 'Velar',
        category: 'suv',
        year: 2022,
        price: 279,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://cdn.pixabay.com/photo/2016/11/07/21/18/range-rover-1806929_1280.jpg',
        featured: true
    },
    {
        id: 9,
        make: 'BMW',
        model: 'X5',
        category: 'suv',
        year: 2023,
        price: 229,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1604249553999-3b422c3d1ff6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qk1XJTIwWDV8ZW58MHx8MHx8fDA%3D',
        featured: false
    },
    {
        id: 10,
        make: 'Audi',
        model: 'Q7',
        category: 'suv',
        year: 2022,
        price: 239,
        seats: 7,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1632823468851-115e63d81694?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEF1ZGklMjBRN3xlbnwwfHwwfHx8MA%3D%3D',
        featured: false
    },
    {
        id: 11,
        make: 'Porsche',
        model: 'Cayenne',
        category: 'suv',
        year: 2023,
        price: 329,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9yc2NoZSUyMGNheWVubmV8ZW58MHx8MHx8fDA%3D',
        featured: false
    },
    {
        id: 12,
        make: 'Tesla',
        model: 'Model X',
        category: 'suv',
        year: 2023,
        price: 299,
        seats: 7,
        transmission: 'Automatic',
        fuel: 'Electric',
        image: 'https://images.unsplash.com/photo-1573700204813-3dfdaecf677c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMHh8ZW58MHx8MHx8fDA%3D',
        featured: false
    },
    
    // Luxury Sedans (6)
    {
        id: 13,
        make: 'BMW',
        model: '7 Series',
        category: 'luxury',
        year: 2022,
        price: 199,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        featured: true
    },
    {
        id: 14,
        make: 'Mercedes',
        model: 'S-Class',
        category: 'luxury',
        year: 2023,
        price: 229,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://cdn.pixabay.com/photo/2017/03/27/14/02/auto-2178926_1280.jpg',
        featured: true
    },
    {
        id: 15,
        make: 'Audi',
        model: 'A8',
        category: 'luxury',
        year: 2022,
        price: 189,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        featured: false
    },
    {
        id: 16,
        make: 'Lexus',
        model: 'LS',
        category: 'luxury',
        year: 2023,
        price: 179,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://www.lexus.com/content/dam/lexus/images/models/ls/2025/visualizer/500/exterior/19-inch-split-10-spoke-alloy-noise-reduction-wheels-with-black-and-machined-finish/eminent-white-pearl/large-1.jpg',
        featured: false
    },
    {
        id: 17,
        make: 'Genesis',
        model: 'G90',
        category: 'luxury',
        year: 2023,
        price: 169,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://s7d1.scene7.com/is/image/hyundai/genesis-2023-g90-my23_rs4_0010-retouch:24-9?wid=1328&hei=498&fmt=webp',
        featured: false
    },
    {
        id: 18,
        make: 'Rolls-Royce',
        model: 'Phantom',
        category: 'luxury',
        year: 2022,
        price: 899,
        seats: 4,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1624804269473-828dcc30a210?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9sbHMlMjBSb3ljZSUyMFBoYW50b218ZW58MHx8MHx8fDA%3D',
        featured: false
    },
    
    // Convertibles (4)
    {
        id: 19,
        make: 'Porsche',
        model: '911 Cabriolet',
        category: 'convertible',
        year: 2022,
        price: 379,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1613835842551-894cdd236160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9yc2NoZSUyMDkxMSUyMENhYnJpb2xldHxlbnwwfHwwfHx8MA%3D%3D',
        featured: true
    },
    {
        id: 20,
        make: 'BMW',
        model: 'Z4',
        category: 'convertible',
        year: 2023,
        price: 229,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1612610683796-3b7d3a65df3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwejR8ZW58MHx8MHx8fDA%3D',
        featured: false
    },
    {
        id: 21,
        make: 'Mercedes',
        model: 'E-Class Cabriolet',
        category: 'convertible',
        year: 2022,
        price: 259,
        seats: 4,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1602613893218-d059f21f4c02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVyY2VkZXMlMjBFJTIwQ2xhc3N8ZW58MHx8MHx8fDA%3D',
        featured: false
    },
    {
        id: 22,
        make: 'Audi',
        model: 'A5 Cabriolet',
        category: 'convertible',
        year: 2023,
        price: 219,
        seats: 4,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaSUyMEE1fGVufDB8fDB8fHww',
        featured: false
    },
    
    // Electric Vehicles (4)
    {
        id: 23,
        make: 'Tesla',
        model: 'Model S',
        category: 'electric',
        year: 2023,
        price: 229,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Electric',
        image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        featured: true
    },
    {
        id: 24,
        make: 'Porsche',
        model: 'Taycan',
        category: 'electric',
        year: 2023,
        price: 329,
        seats: 4,
        transmission: 'Automatic',
        fuel: 'Electric',
        image: 'https://cdn.pixabay.com/photo/2023/08/03/16/53/ai-generated-8167563_1280.jpg',
        featured: false
    },
    {
        id: 25,
        make: 'Audi',
        model: 'e-tron GT',
        category: 'electric',
        year: 2023,
        price: 279,
        seats: 4,
        transmission: 'Automatic',
        fuel: 'Electric',
        image: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg',
        featured: false
    },
    {
        id: 26,
        make: 'Lucid',
        model: 'Air',
        category: 'electric',
        year: 2023,
        price: 349,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Electric',
        image: 'https://images.unsplash.com/photo-1701311521752-9f85d68d55ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHVjaWQlMjBhaXJ8ZW58MHx8MHx8fDA%3D',
        featured: false
    },
    
    // Luxury Coupes (4)
    {
        id: 27,
        make: 'Lexus',
        model: 'LC 500',
        category: 'coupe',
        year: 2022,
        price: 259,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/21/00/auto-969046_1280.jpg',
        featured: true
    },
    {
        id: 28,
        make: 'Mercedes',
        model: 'AMG GT',
        category: 'coupe',
        year: 2023,
        price: 299,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2VkZXMlMjBhbWclMjBndHxlbnwwfHwwfHx8MA%3D%3D',
        featured: false
    },
    {
        id: 29,
        make: 'BMW',
        model: '8 Series',
        category: 'coupe',
        year: 2022,
        price: 279,
        seats: 4,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym13JTIwOCUyMHNlcmllc3xlbnwwfHwwfHx8MA%3D%3D',
        featured: false
    },
    {
        id: 30,
        make: 'Aston Martin',
        model: 'DB11',
        category: 'coupe',
        year: 2023,
        price: 399,
        seats: 2,
        transmission: 'Automatic',
        fuel: 'Premium',
        image: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0b24lMjBtYXJ0aW4lMjBkYiUyMDExfGVufDB8fDB8fHww',
        featured: false
    },
    
    // Kia i10 (for search demo)
    {
        id: 31,
        make: 'Kia',
        model: 'i10',
        category: 'economy',
        year: 2021,
        price: 89,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Regular',
        image: 'https://cdn.pixabay.com/photo/2017/08/09/23/01/car-2616099_1280.jpg',
        featured: false
    }
];


// Store the complete cars array in localStorage to make it available across all pages
function initializeCarsData() {
    localStorage.setItem('cars', JSON.stringify(cars));

    // Only initialize if not already done to avoid overwriting
    if (!localStorage.getItem('cars')) {
        localStorage.setItem('cars', JSON.stringify(cars));
    }
}

// Initialize heart icons for toggling favorites
function initializeHeartIcons() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    document.querySelectorAll('.heart-icon').forEach(icon => {
        const carId = parseInt(icon.getAttribute('data-car-id'));
        
        // Set initial state
        if (favorites.includes(carId)) {
            icon.classList.add('favorited');
        }
        
        // Add click handler
        icon.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isFavorited = this.classList.contains('favorited');
            this.classList.toggle('favorited');
            
            // Update favorites in localStorage
            if (isFavorited) {
                const index = favorites.indexOf(carId);
                if (index > -1) favorites.splice(index, 1);
            } else {
                favorites.push(carId);
            }
            
            localStorage.setItem('favorites', JSON.stringify(favorites));
            updateFavoriteCount();
        });
    });
}

// Update favorite count in navigation
function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Find all favorite count elements
    const favoriteCountElements = document.querySelectorAll('.favorite-count');
    
    if (favoriteCountElements.length > 0) {
        // Update all instances of the favorite count
        favoriteCountElements.forEach(element => {
            if (favorites.length > 0) {
                element.textContent = favorites.length;
                element.style.display = 'inline-block';
            } else {
                element.style.display = 'none';
            }
        });
    } else {
        // If no favorite count element exists, create one in the nav-icons
        const navIcons = document.querySelector('.nav-icons');
        if (navIcons && !navIcons.querySelector('.favorite-count')) {
            const favoriteLink = navIcons.querySelector('a[href="fav.html"]') || 
                                navIcons.querySelector('a');
            
            if (favoriteLink) {
                const countElement = document.createElement('span');
                countElement.className = 'favorite-count';
                
                if (favorites.length > 0) {
                    countElement.textContent = favorites.length;
                    countElement.style.display = 'inline-block';
                } else {
                    countElement.style.display = 'none';
                }
                
                favoriteLink.appendChild(countElement);
            }
        }
    }
    
    // Update page title if we're on favorites page
    if (window.location.pathname.includes('fav.html')) {
        document.title = favorites.length > 0 ? 
            `Favorites (${favorites.length}) - Rental Cars` : 
            `Favorites - Rental Cars`;
    }
}
// This function will load all cars (both predefined and user-listed)
function loadAllCars() {
    // Initialize cars data in localStorage first
    initializeCarsData();
    
    const featuredCarsContainer = document.getElementById('featuredCars');
    if (!featuredCarsContainer) return; // Exit if not on the right page
    
    featuredCarsContainer.innerHTML = '';
    
    // Get predefined cars from the current page's variable or from localStorage
    const predefinedCars = typeof cars !== 'undefined' ? cars : 
                          JSON.parse(localStorage.getItem('cars')) || [];
    
    // Get user-listed cars from localStorage
    const userListedCars = JSON.parse(localStorage.getItem('listedCars')) || [];
    
    // Combine both arrays and transform user-listed cars to match the format of predefined cars
    const allCars = [
        ...predefinedCars,
        ...userListedCars.map(car => ({
            id: car.id,
            make: car.brand,
            model: car.model,
            price: car.price,
            image: car.images && car.images.length > 0 ? car.images[0] : 'path/to/default-image.jpg',
            seats: car.seats,
            transmission: car.transmission,
            fuel: car.fuelType
        }))
    ];
    
    // Display all cars
    allCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'featured-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}" class="featured-image">
            <div class="featured-content">
                <div class="featured-header">
                    <h3 class="featured-title">${car.make} ${car.model}
                        <i class="fas fa-heart heart-icon" data-car-id="${car.id}"></i>
                    </h3>
                    <div class="featured-price">$${car.price}<span>/day</span></div>
                </div>
                <div class="featured-details">
                    <span><i class="fas fa-users"></i> ${car.seats}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.transmission}</span>
                    <span><i class="${car.fuel === 'Electric' ? 'fas fa-bolt' : 'fas fa-gas-pump'}"></i> ${car.fuel}</span>
                </div>
                <div class="featured-actions">
                    <button class="btn btn-outline add-to-cart" data-car-id="${car.id}">add to cart</button>
                    <a href="now.html?id=${car.id}" class="btn btn-primary">contact owner</a>
                </div>
            </div>
        `;
        
        featuredCarsContainer.appendChild(carCard);
    });
    
    initializeHeartIcons();
    updateFavoriteCount();
    
    // Update section title when showing all cars
    const sectionTitle = document.querySelector('.section-title h2');
    if (sectionTitle) {
        sectionTitle.textContent = 'All Available Vehicles';
        const sectionSubtitle = sectionTitle.nextElementSibling;
        if (sectionSubtitle) {
            sectionSubtitle.textContent = 'Browse our complete collection, including user-listed vehicles';
        }
    }
}


// Add to cart functionality with toast notifications
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const carId = e.target.dataset.carId;
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        const car = cars.find(c => c.id == carId);
        
        if (car) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (!cart.some(item => item.id === car.id)) {
                cart.push(car);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                showToast(`${car.make} ${car.model} added to cart!`, 'success');
            } else {
                showToast('This car is already in your cart', 'warning');
            }
        }
    }
});

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
  
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.nav-icons .fa-shopping-cart + .cart-count');
    
    if (cartCount) {
      cartCount.textContent = cart.length;
      cartCount.style.display = cart.length ? 'block' : 'none';
    }
  }
  
  // Call this whenever the cart changes
  updateCartCount();
  
  
// Filter cars by category
function filterByCategory(category) {
    const featuredCarsContainer = document.getElementById('featuredCars');
    if (!featuredCarsContainer) return;
    
    featuredCarsContainer.innerHTML = '';
    
    // If "all" category is selected, show all cars
    if (category === 'all') {
        loadAllCars();
        return;
    }
    
    const allCars = typeof cars !== 'undefined' ? cars : 
                    JSON.parse(localStorage.getItem('cars')) || [];
    const filteredCars = allCars.filter(car => car.category === category);
    
    if (filteredCars.length === 0) {
        featuredCarsContainer.innerHTML = '<p style="grid-column:1/-1;text-align:center;">No vehicles found in this category.</p>';
        return;
    }
    
    filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'featured-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}" class="featured-image">
            <div class="featured-content">
                <div class="featured-header">
                    <h3 class="featured-title">${car.make} ${car.model}
                        <i class="fas fa-heart heart-icon" data-car-id="${car.id}"></i>
                    </h3>
                    <div class="featured-price">$${car.price}<span>/day</span></div>
                </div>
                <div class="featured-details">
                    <span><i class="fas fa-users"></i> ${car.seats}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.transmission}</span>
                    <span><i class="${car.fuel === 'Electric' ? 'fas fa-bolt' : 'fas fa-gas-pump'}"></i> ${car.fuel}</span>
                </div>
                <div class="featured-actions">
                    <button class="btn btn-outline add-to-cart" data-car-id="${car.id}">add to cart</button>
                    <a href="now.html?id=${car.id}" class="btn btn-primary">contact owner</a>
                </div>
            </div>
        `;
        featuredCarsContainer.appendChild(carCard);
    });
    
    initializeHeartIcons();
    
    // Update section title when showing filtered cars
    const sectionTitle = document.querySelector('.section-title h2');
    if (sectionTitle) {
        // Get the category name for display
        const categoryDisplayName = category.charAt(0).toUpperCase() + category.slice(1);
        sectionTitle.textContent = `${categoryDisplayName} Vehicles`;
        const sectionSubtitle = sectionTitle.nextElementSibling;
        if (sectionSubtitle) {
            sectionSubtitle.textContent = `${filteredCars.length} vehicles available`;
        }
    }
}

// Search cars by make/model
function searchCars(query) {
    const featuredCarsContainer = document.getElementById('featuredCars');
    if (!featuredCarsContainer) return;
    
    featuredCarsContainer.innerHTML = '';

    const allCars = typeof cars !== 'undefined' ? cars : 
                    JSON.parse(localStorage.getItem('cars')) || [];
    const searchResults = allCars.filter(car => 
        `${car.make} ${car.model}`.toLowerCase().includes(query.toLowerCase())
    );

    if (searchResults.length === 0) {
        featuredCarsContainer.innerHTML = '<p style="grid-column:1/-1;text-align:center;">No vehicles found matching your search.</p>';
        return;
    }

    searchResults.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'featured-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}" class="featured-image">
            <div class="featured-content">
                <div class="featured-header">
                    <h3 class="featured-title">${car.make} ${car.model}
                        <i class="fas fa-heart heart-icon" data-car-id="${car.id}"></i>
                    </h3>
                    <div class="featured-price">$${car.price}<span>/day</span></div>
                </div>
                <div class="featured-details">
                    <span><i class="fas fa-users"></i> ${car.seats}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.transmission}</span>
                    <span><i class="${car.fuel === 'Electric' ? 'fas fa-bolt' : 'fas fa-gas-pump'}"></i> ${car.fuel}</span>
                </div>
                <div class="featured-actions">
                    <button class="btn btn-outline add-to-cart" data-car-id="${car.id}">add to cart</button>
                    <a href="now.html?id=${car.id}" class="btn btn-primary">contact owner</a>
                </div>
            </div>
        `;
        featuredCarsContainer.appendChild(carCard);
    });
    
    initializeHeartIcons();
}

// Advanced Filter Function
function advancedFilterCars(params) {
    const allCars = typeof cars !== 'undefined' ? cars : 
                    JSON.parse(localStorage.getItem('cars')) || [];
    const filteredCars = allCars.filter(car => {
        // Type filter - if no type is selected (empty string), include all types
        if (params.carType && params.carType !== '' && car.category !== params.carType) {
            return false;
        }
        
        // Price range filter
        if (car.price < params.minPrice || (params.maxPrice !== Number.MAX_VALUE && car.price > params.maxPrice)) {
            return false;
        }
        
        return true;
    });
    
    displayAdvancedSearchResults(filteredCars, params);
}

// Display Advanced Search Results
function displayAdvancedSearchResults(filteredCars, params) {
    const featuredCarsContainer = document.getElementById('featuredCars');
    if (!featuredCarsContainer) return;
    
    featuredCarsContainer.innerHTML = '';
    
    if (filteredCars.length === 0) {
        featuredCarsContainer.innerHTML = '<p style="grid-column:1/-1;text-align:center;">No vehicles match your search criteria</p>';
        return;
    }
    
    // Update section title for search results
    const sectionTitle = document.querySelector('.section-title h2');
    if (sectionTitle) {
        // Create title based on filter criteria
        let titleText = 'Search Results';
        
        if (params.carType) {
            const categoryDisplayName = params.carType.charAt(0).toUpperCase() + params.carType.slice(1);
            titleText = `${categoryDisplayName} Vehicles`;
        }
        
        if (params.minPrice > 0 || params.maxPrice < Number.MAX_VALUE) {
            titleText += ` ($${params.minPrice}-$${params.maxPrice === Number.MAX_VALUE ? '∞' : params.maxPrice})`;
        }
        
        sectionTitle.textContent = titleText;
        
        const sectionSubtitle = sectionTitle.nextElementSibling;
        if (sectionSubtitle) {
            sectionSubtitle.textContent = `${filteredCars.length} vehicles found`;
        }
    }
    
    filteredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'featured-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}" class="featured-image">
            <div class="featured-content">
                <div class="featured-header">
                    <h3 class="featured-title">${car.make} ${car.model}
                        <i class="fas fa-heart heart-icon" data-car-id="${car.id}"></i>
                    </h3>
                    <div class="featured-price">$${car.price}<span>/day</span></div>
                </div>
                <div class="featured-details">
                    <span><i class="fas fa-users"></i> ${car.seats}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.transmission}</span>
                    <span><i class="${car.fuel === 'Electric' ? 'fas fa-bolt' : 'fas fa-gas-pump'}"></i> ${car.fuel}</span>
                </div>
                <div class="featured-actions">
                    <button class="btn btn-outline add-to-cart" data-car-id="${car.id}">add to cart</button>
                    <a href="now.html?id=${car.id}" class="btn btn-primary">contact owner</a>
                </div>
            </div>
        `;
        featuredCarsContainer.appendChild(carCard);
    });
    
    initializeHeartIcons();
}

// Load favorite cars for favorites.html page
function loadFavoriteCars() {
    if (!window.location.pathname.includes('fav.html')) return;
    
    const favoriteContainer = document.querySelector('.car-grid');
    if (!favoriteContainer) return;
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const allCars = JSON.parse(localStorage.getItem('cars')) || [];
    
    // Filter cars to get only the favorite ones
    const favoriteCars = allCars.filter(car => favorites.includes(car.id));
    
    favoriteContainer.innerHTML = '';
    
    if (favoriteCars.length === 0) {
        favoriteContainer.innerHTML = '<p class="no-favorites">You have no favorite cars yet. Start adding some!</p>';
        return;
    }
    
    // Loop through favorite cars and display them
    favoriteCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image" style="background-image: url('${car.image}')"></div>
            <div class="car-info">
                <h3 class="car-title">${car.make} ${car.model} 
                    <i class="fas fa-heart favorite-icon favorited" data-car-id="${car.id}"></i>
                </h3>
                <div class="car-price">$${car.price} <span>/ day</span></div>
                <div class="car-details">
                    <span><i class="fas fa-users"></i> ${car.seats} Seats</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.transmission}</span>
                    <span><i class="${car.fuel === 'Electric' ? 'fas fa-bolt' : 'fas fa-gas-pump'}"></i> ${car.fuel}</span>
                </div>
                <div class="car-actions">
                    <button class="btn btn-outline add-to-cart" data-car-id="${car.id}">add to cart</button>
                    <a href="now.html?id=${car.id}" class="btn btn-primary">contact owner</a>
                </div>
            </div>
        `;
        
        favoriteContainer.appendChild(carCard);
    });
    
    // Add event listeners for removing favorites
    document.querySelectorAll('.favorite-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const carId = parseInt(this.getAttribute('data-car-id'));
            
            // Remove from favorites
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const index = favorites.indexOf(carId);
            if (index > -1) {
                favorites.splice(index, 1);
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
            
            // Refresh the page to show updated favorites
            loadFavoriteCars();
            updateFavoriteCount();
        });
    });
}

// Set up mobile menu functionality
function setupMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
}

// Set up event listeners for the page
function setupEventListeners() {
    // Category filter click handlers
    document.querySelectorAll('.collection-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            filterByCategory(category);
            
            // Visual feedback that filter is active
            document.querySelectorAll('.collection-card').forEach(c => {
                c.classList.remove('active');
            });
            card.classList.add('active');
        });
    });
    
    // Search form handler
    const searchForm = document.getElementById('rentalSearch');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchQuery = document.getElementById('searchQuery').value;
            
            if (searchQuery) {
                searchCars(searchQuery);
            } else {
                loadAllCars(); // Show all cars if search is cleared
            }
        });
    }
    
    // Advanced Search Form Handler
    const advancedSearchForm = document.getElementById('searchForm');
    if (advancedSearchForm) {
        advancedSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchParams = {
                carType: document.getElementById('car-type').value,
                minPrice: parseFloat(document.getElementById('min-price').value) || 0,
                maxPrice: parseFloat(document.getElementById('max-price').value) || Number.MAX_VALUE
            };
            
            advancedFilterCars(searchParams);
        });
    }
    
    // Collection slider navigation
    const prevCollectionBtn = document.getElementById('prevCollection');
    const nextCollectionBtn = document.getElementById('nextCollection');
    const collectionsSlider = document.getElementById('collectionsSlider');
    
    if (prevCollectionBtn && collectionsSlider) {
        prevCollectionBtn.addEventListener('click', () => {
            collectionsSlider.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
    }
    
    if (nextCollectionBtn && collectionsSlider) {
        nextCollectionBtn.addEventListener('click', () => {
            collectionsSlider.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }
}

// Main initialization function
function initializeApp() {
    // Store cars data in localStorage
    initializeCarsData();
    
    // Set up form default values
    const maxPriceInput = document.getElementById('max-price');
    if (maxPriceInput && !maxPriceInput.value) {
        maxPriceInput.value = '1000';
    }

    const minPriceInput = document.getElementById('min-price');
    if (minPriceInput && !minPriceInput.value) {
        minPriceInput.value = '100';
    }
    
    // Check which page we're on and load appropriate cars
    if (window.location.pathname.includes('fav.html')) {
        loadFavoriteCars();
    } else {
        loadAllCars();
    }
    
    // Update favorite count
    updateFavoriteCount();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up mobile menu
    setupMobileMenu();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);