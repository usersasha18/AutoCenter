    import cars from './data.js';

    function toHtml(car) {
        const {id ,title, price, image, stat } = car;
        const { engine, wd, year, transmission, fuel } = stat;
        
        const itemClass = id >= 5 ? 'hidden-card' : ''; 
        
        return `
        <div class="car-item ${itemClass}">
            <img src="./assets/images/${image}" alt="${title}">
            <h3 class="car-title">${title}</h3>
            <p class="car-about-text">${year} • ${engine} • ${wd} • ${fuel} • ${transmission}</p>
            <div class="price-block">
                <p class="car-price">${price.toLocaleString()}</p>
                <button class="card-list-button hidden-button">
                    Оставить заявку
                </button>
            </div>
        </div>
        `;

    }

    function renderCars(cars) {
        const outputContainer = document.querySelector('.cars-list');
        outputContainer.innerHTML = cars.map(toHtml).join('');
    }

    renderCars(cars);