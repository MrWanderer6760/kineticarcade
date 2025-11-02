const TOTAL_GAMES = 40;
const GAMES_PER_PAGE = 20;
const TOTAL_PAGES = Math.ceil(TOTAL_GAMES / GAMES_PER_PAGE);

const gamesData = Array.from({ length: TOTAL_GAMES }, (_, i) => ({
    id: i + 1,
    title: `Игра №${i + 1}: Название`,
    image: `images/game_thumb_${(i % 10) + 1}.jpg`, 
    link: `game-template.html?gameid=${i + 1}` 
}));


function renderGameGrid(page) {
    const grid = document.querySelector('.game-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const start = (page - 1) * GAMES_PER_PAGE;
    const end = start + GAMES_PER_PAGE;
    const gamesToShow = gamesData.slice(start, end);

    gamesToShow.forEach(game => {
        const tile = document.createElement('a');
        tile.href = game.link;
        tile.className = 'game-tile';
        tile.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="game-tile-info">
                <h3>${game.title}</h3>
                <p>Играй сейчас!</p>
            </div>
        `;
        grid.appendChild(tile);
    });
}

function renderPagination(currentPage) {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;
    
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= TOTAL_PAGES; i++) {
        const element = document.createElement(i === currentPage ? 'span' : 'a');
        element.textContent = i;
        
        if (i === currentPage) {
            element.className = 'current';
        } else {
            element.href = `catalog-games.html?page=${i}`;
        }
        
        paginationContainer.appendChild(element);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page')) || 1;

    renderGameGrid(currentPage);
    renderPagination(currentPage);
});

const TOTAL_GAMES = 40;
const GAMES_PER_PAGE = 20;
const TOTAL_PAGES = Math.ceil(TOTAL_GAMES / GAMES_PER_PAGE);

// Шаблон данных для 40 игр (заглушка)
const gamesData = Array.from({ length: TOTAL_GAMES }, (_, i) => ({
    id: i + 1,
    title: `Классика Flash №${i + 1}`,
    image: `images/game_icon_placeholder.jpg`, 
    link: `game-template.html?gameid=${i + 1}` 
}));

/**
 * Генерирует и отображает плитки игр для текущей страницы.
 * @param {number} page - Номер страницы для отображения.
 */
function renderGameGrid(page) {
    const grid = document.querySelector('.game-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const start = (page - 1) * GAMES_PER_PAGE;
    const end = Math.min(start + GAMES_PER_PAGE, TOTAL_GAMES);
    const gamesToShow = gamesData.slice(start, end);

    if (gamesToShow.length === 0) {
        grid.innerHTML = '<p>На этой странице пока нет игр.</p>';
        return;
    }

    gamesToShow.forEach(game => {
        const tile = document.createElement('a');
        tile.href = game.link;
        tile.className = 'game-tile';
        tile.innerHTML = `
            <img src="${game.image}" alt="Иконка игры ${game.title}">
            <div class="game-tile-info">
                <h3>${game.title}</h3>
            </div>
        `;
        grid.appendChild(tile);
    });
}

/**
 * Генерирует ссылки для перелистывания страниц.
 * @param {number} currentPage - Текущий номер страницы.
 */
function renderPagination(currentPage) {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer || TOTAL_PAGES <= 1) return; 
    
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= TOTAL_PAGES; i++) {
        const element = document.createElement('a');
        element.textContent = i;
        
        if (i === currentPage) {
            element.className = 'current';
            element.removeAttribute('href'); 
            element.tag = 'span';
        } else {
            element.href = `catalog-games.html?page=${i}`;
        }
        
        paginationContainer.appendChild(element);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page')) || 1;

    renderGameGrid(currentPage);
    renderPagination(currentPage);
});
