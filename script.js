function initializeAppData() {
    // Sample car data that matches your HTML
    const cars = [
        {
            id: 100,
            make: 'BMW',
            model: '7 Series',
            year: 2022,
            price: 199,
            mileage: 15000,
            color: 'Blue',
            transmission: 'Automatic',
            type: 'luxury',
            seats: 5,
            fuel: 'Premium',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 102,
            make: 'Mercedes',
            model: 'GLE',
            year: 2022,
            price: 249,
            mileage: 12000,
            color: 'Black',
            transmission: 'Automatic',
            type: 'suv',
            seats: 5,
            fuel: 'Premium',
            image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 103,
            make: 'Tesla',
            model: 'Model S',
            year: 2022,
            price: 229,
            mileage: 10000,
            color: 'White',
            transmission: 'Automatic',
            type: 'electric',
            seats: 5,
            fuel: 'Electric',
            image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 104,
            make: 'Porsche',
            model: '911',
            year: 2022,
            price: 349,
            mileage: 8000,
            color: 'Red',
            transmission: 'Automatic',
            type: 'sports',
            seats: 2,
            fuel: 'Premium',
            image: 'https://images.unsplash.com/photo-1634673970798-a15ae56f6c65?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 105,
            make: 'Audi',
            model: 'RS6',
            year: 2022,
            price: 279,
            mileage: 9000,
            color: 'Silver',
            transmission: 'Automatic',
            type: 'luxury',
            seats: 5,
            fuel: 'Premium',
            image: 'https://images.unsplash.com/photo-1615715070496-d85daab3618d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXVkaSUyMFJTNnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 106,
            make: 'Lexus',
            model: 'LC 500',
            year: 2022,
            price: 259,
            mileage: 11000,
            color: 'Black',
            transmission: 'Automatic',
            type: 'luxury',
            seats: 2,
            fuel: 'Premium',
            image: 'https://images.unsplash.com/photo-1577496549771-036979fd95e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGV4dXMlMjBMQyUyMDUwMHxlbnwwfHwwfHx8MA%3D%3D'
        },
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

    localStorage.setItem('cars', JSON.stringify(cars));


    // Initialize other storage areas
    if (!localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', JSON.stringify([]));
    }

    if (!localStorage.getItem('searchHistory')) {
        localStorage.setItem('searchHistory', JSON.stringify([]));
    }

    if (!localStorage.getItem('userPreferences')) {
        localStorage.setItem('userPreferences', JSON.stringify({
            darkMode: false,
            currency: 'USD'
        }));
    }
}


const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
      question.addEventListener('click', () => {
        // Toggle active class on the clicked question
        question.classList.toggle('active');
      });
    });

    function loadCars() {
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        const container = document.querySelector('.car-grid');
        container.innerHTML = '';
    
        cars.slice(0, 6).forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.innerHTML = `
                <div class="car-image" style="background-image: url('${car.image}')"></div>
                <div class="car-info">
                    <h3 class="car-title">${car.make || car.brand} ${car.model} <i class="fas fa-heart favorite-icon" data-id="${car.id}"></i></h3>
                    <div class="car-price">$${car.price} <span>/ day</span></div>
                    <div class="car-details">
                        <span><i class="fas fa-users"></i> ${car.seats} Seats</span>
                        <span><i class="fas fa-tachometer-alt"></i> ${car.transmission}</span>
                        <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    </div>
                    <div class="car-actions">
                        <button class="btn btn-outline add-to-cart" data-car-id="${car.id}">add to cart</button>
                        <a href="now.html?id=${car.id}" class="btn btn-primary">contact owner</a>
                    </div>
                </div>
            `;
            container.appendChild(carCard);
        });
        
        updateFavoriteButtons();
        updateFavoriteCount();
    }

function toggleFavorite(carId, heartIcon) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favorites.includes(carId)) {
        // Remove from favorites
        favorites = favorites.filter(id => id !== carId);
        if (heartIcon) {
            heartIcon.classList.remove('favorited');
            // Don't set a specific color - let CSS handle it
        }
    } else {
        // Add to favorites
        favorites.push(carId);
        if (heartIcon) {
            heartIcon.classList.add('favorited');
            // Don't set a specific color - let CSS handle it
        }
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
    updateFavoriteCount();
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.favorite-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const carId = parseInt(this.dataset.id);
            toggleFavorite(carId, this);
        });
    });
    updateFavoriteButtons();
});


function updateFavoriteButtons() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    document.querySelectorAll('.favorite-icon').forEach(icon => {
        const carId = parseInt(icon.dataset.id);
        if (favorites.includes(carId)) {
            icon.classList.add('favorited');
            icon.style.color = 'red';
        } else {
            icon.classList.remove('favorited');
            icon.style.color = '';
        }
    });
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.heart-icon').forEach(icon => {
        icon.addEventListener('click', function () {
            const carId = parseInt(this.dataset.carId);
            toggleFavorite(carId);
        });
    });

    updateFavoriteButtons();
});

// Update favorite count in navigation - Make sure this runs on every page
function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Find all favorite count elements (might be multiple across the page)
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
    
    // Additionally, update page title if we're on favorites page
    if (window.location.pathname.includes('fav.html')) {
        document.title = favorites.length > 0 ? 
            `Favorites (${favorites.length}) - Rental Cars` : 
            `Favorites - Rental Cars`;
    }
}

// Load favorite cars for favorites.html page
function loadFavoriteCars() {
    if (!window.location.pathname.includes('fav.html')) return;
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    const favoriteCars = cars.filter(car => favorites.includes(car.id));
    const container = document.querySelector('.car-grid');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (favoriteCars.length === 0) {
        container.innerHTML = '<p class="no-favorites">You have no favorite cars yet. Start adding some!</p>';
        return;
    }
    
    favoriteCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
               <div class="car-image" style="background-image: url('${car.image}')"></div>
                <div class="car-info">
                    <h3 class="car-title">${car.make || car.brand} ${car.model} <i class="fas fa-heart favorite-icon" data-id="${car.id}"></i></h3>
                    <div class="car-price">$${car.price} <span>/ day</span></div>
                    <div class="car-details">
                        <span><i class="fas fa-users"></i> ${car.seats} Seats</span>
                        <span><i class="fas fa-tachometer-alt"></i> ${car.transmission}</span>
                        <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    </div>
                    <div class="car-actions">
                        <button class="btn btn-outline add-to-cart" data-car-id="${car.id}">add to cart</button>
                        <a href="now.html?id=${car.id}" class="btn btn-primary">contact owner</a>
                    </div>
                </div>
        `;
        container.appendChild(carCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Loading screen handling
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        handleLoadingScreen();
    } else {
        // If no loading screen, initialize app directly
        initializeApp();
    }
});

function handleLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('progressBar');
    const carContainer = document.querySelector('.car-container');
    const exhaust = document.querySelector('.exhaust');
    const roadWidth = document.querySelector('.road').offsetWidth;
    const carWidth = 80; // matches .car-container width
    
    let progress = 0;
    const totalDuration = 2000; // 2 seconds total
    const updateInterval = 20; // Update every 20ms for smooth animation
    const progressIncrement = 100 / (totalDuration / updateInterval);
    
    function updateProgress() {
        progress += progressIncrement;
        if (progress > 100) progress = 100;
        
        // Update progress bar
        progressBar.style.width = `${progress}%`;
        
        // Move car based on progress
        const carPosition = (roadWidth - carWidth) * (progress / 100);
        carContainer.style.left = `${carPosition}px`;
        
        // Occasional exhaust puff (every 500ms)
        if (progress % 25 === 0) {
            exhaust.classList.add('active');
            setTimeout(() => {
                exhaust.classList.remove('active');
            }, 300);
        }
        
        // When complete
        if (progress >= 100) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                initializeApp();
            }, 300);
        } else {
            setTimeout(updateProgress, updateInterval);
        }
    }
    
    // Start loading animation immediately
    updateProgress();
}

function initializeApp() {
    initializeAppData();
    
    // Check which page we're on and load appropriate cars
    if (window.location.pathname.includes('fav.html')) {
        loadFavoriteCars();
    } else {
        loadCars();
    }
    
    updateFavoriteCount();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up mobile menu
    setupMobileMenu();
}

function setupEventListeners() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('favorite-icon')) {
            e.preventDefault();
            const carId = parseInt(e.target.dataset.id);
            toggleFavorite(carId);
        }
        
        if (e.target.closest('.view-details')) {
            e.preventDefault();
            const carId = parseInt(e.target.closest('.view-details').dataset.id);
            viewCarDetails(carId);
        }
    });
}

function setupMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.nav-icons .fa-shopping-cart + .cart-count');
    
    if (cartCount) {
      cartCount.textContent = cart.length;
      cartCount.style.display = cart.length ? 'block' : 'none';
    }
  }
  
  updateCartCount();


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


function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}


// Add to your script.js file or before closing </body> tag
document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('logo-loading-overlay');
    const logoPart1 = document.getElementById('logo-part-1');
    const logoPart2 = document.getElementById('logo-part-2');
    const logoPart3 = document.getElementById('logo-part-3');
    
    // Show first part immediately
    logoPart1.classList.add('visible');
    
    // Show second part after 600ms
    setTimeout(() => {
      logoPart2.classList.add('visible');
      
      // Show third part after another 600ms
      setTimeout(() => {
        logoPart3.classList.add('visible');
        
        // Hide loading screen after all parts are visible
        setTimeout(() => {
          loadingOverlay.style.opacity = '0';
          
          // Remove from DOM after fade out
          setTimeout(() => {
            loadingOverlay.style.display = 'none';
          }, 500);
        }, 800);
      }, 600);
    }, 600);
  });
  
