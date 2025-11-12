// Все данные игр для детальных страниц
const allGamesData = {
    1: {
        id: 1,
        title: "Mem clicker",
        description: "Игра в жанре кликер, где ты можешь изменять скин кнопки на котором изображен интернет мем и сопровождается словами из этого мема. Увлекательная игра с простым геймплеем и забавными мемами.",
        category: "casual",
        platform: "mobile",
        image: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/%D0%BE%D0%B1%D0%BB%D0%BE%D1%88%D0%BA%D0%B0%20ya.png",
        url: "https://www.rustore.ru/catalog/app/com.zetxplay.Memkliker",
        icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
        screenshots: [
            "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/%D1%81%D0%BA%D1%80%D0%B8%D0%BD%20%281%29.jpg",
            "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/%D1%81%D0%BA%D1%80%D0%B8%D0%BD%20%282%29.png"
        ],
        developer: "Zetx Play",
    landscapeScreenshots: false, // Портретные скриншоты
    donationIframe: '<iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=145K4U2FG4A.240723&" width="330" height="50" frameborder="0" allowtransparency="true" scrolling="no"></iframe>'
    },
    2: {
         id: 2,
    title: "Colour man",
    description: "Colour man - это игра, где вам надо собрать шарики того же цвета, что и бегущий человечек, собирай шарики - набирай очки и уворачивайся от пик - сохраняй очки. Желаем хорошей игры!",
    category: "casual",
    platform: "mobile",
    image: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/Colour%20man/%D0%BE%D0%B1%D0%BB%D0%BE%D1%88%D0%BA%D0%B0.png",
    url: "https://www.rustore.ru/catalog/app/com.zetxplay.Memkliker",
    icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
    screenshots: [
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/Colour%20man/2024-04-30_17-21-50.png",
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/Colour%20man/2024-04-30_17-19-04.png",
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/Colour%20man/2024-04-30_17-17-50.png"
    ],
    developer: "Zetx play",
    landscapeScreenshots: false, // Портретные скриншоты
    donationIframe: '<iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=145K4U2FG4A.240723&" width="330" height="50" frameborder="0" allowtransparency="true" scrolling="no"></iframe>'
    },
    3: {
          id: 3,
    title: "Викторина мемов",
    description: "Викторина мемов это игра про всеми нами любимые мемы, тут можно как и вспомнить бессмертную классику так и проверить знание на новые мемы. Так же в игре есть пасхалки которые будут прятаться в неправильных ответах. Качай игру и повеселись.",
    category: "casual",
    platform: "mobile",
    image: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B0%20%D0%BC%D0%B5%D0%BC%D0%BE%D0%B2/%D0%BE%D0%B1%D0%BB%D0%BE%D1%88%D0%BA%D0%B0.jpg",
    url: "https://www.rustore.ru/catalog/app/com.zetxplay.Memkliker",
    icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
    screenshots: [
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B0%20%D0%BC%D0%B5%D0%BC%D0%BE%D0%B2/scrin3%20%282%29.png",
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B0%20%D0%BC%D0%B5%D0%BC%D0%BE%D0%B2/scrin2.jpg",
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B0%20%D0%BC%D0%B5%D0%BC%D0%BE%D0%B2/scrin1.png"
    ],
    developer: "Zetx play",
    landscapeScreenshots: true, // Портретные скриншоты
    donationIframe: '<iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=145K4U2FG4A.240723&" width="330" height="50" frameborder="0" allowtransparency="true" scrolling="no"></iframe>'
    }

};

// Функция загрузки деталей игры
function loadGameDetails() {
    const gameContainer = document.getElementById('game-detail-container');
    
    if (!gameContainer) return;
    
    // Получаем ID игры из localStorage
    const gameId = localStorage.getItem('selectedGameId');
    
    if (!gameId || !allGamesData[gameId]) {
        gameContainer.innerHTML = `
            <div class="error-message">
                <h2>Игра не найдена</h2>
                <p>Извините, запрашиваемая игра не существует.</p>
                <a href="index.html" class="btn btn-primary">Вернуться к каталогу</a>
            </div>
        `;
        return;
    }
    
    const game = allGamesData[gameId];
    const screenshots = Array.isArray(game.screenshots) ? game.screenshots : [];
    
    // Определяем класс для скриншотов в зависимости от ориентации
    const screenshotClass = game.landscapeScreenshots ? 'screenshot-landscape' : 'screenshot-portrait';
    
    gameContainer.innerHTML = `
        <div class="game-detail">
            <!-- Обложка игры -->
            <div class="game-cover">
                <img src="${game.image || ''}" alt="${game.title}" onerror="this.src='https://via.placeholder.com/800x400/283593/ffffff?text=No+Image'">
            </div>
            
            <!-- Основная информация -->
            <div class="game-main-info">
                <div class="game-header">
                    <h1 class="game-title">${game.title || 'Название игры'}</h1>
                    <div class="game-meta">
                        <span class="game-category">${getCategoryName(game.category)}</span>
                        <span class="game-platform">${getPlatformName(game.platform)}</span>
                        <span class="game-developer">👨‍💻 ${game.developer || 'Неизвестный разработчик'}</span>
                    </div>
                </div>
                
                <p class="game-description">${game.description || 'Описание отсутствует'}</p>
                
                <!-- Кнопка перейти к игре -->
                <div class="game-actions">
                    <a href="${game.url || '#'}" target="_blank" class="btn btn-primary btn-large">
                        🎮 Перейти к игре
                    </a>
                </div>
            </div>
            
            <!-- Скриншоты -->
            ${screenshots.length > 0 ? `
            <div class="game-screenshots">
                <h2>Скриншоты</h2>
                <div class="screenshots-grid ${screenshotClass}">
                    ${screenshots.map(screenshot => 
                        `<div class="screenshot-item">
                            <img src="${screenshot}" alt="Скриншот игры ${game.title}" onerror="this.src='https://via.placeholder.com/600x400/3949ab/ffffff?text=Screenshot+Error'">
                        </div>`
                    ).join('')}
                </div>
            </div>
            ` : '<p class="no-screenshots">Скриншоты отсутствуют</p>'}
            
            <!-- Панель поддержки разработчика -->
            <div class="donation-panel">
                <h3>Поддержать разработчика</h3>
                <p>Если вам понравилась игра, вы можете поддержать разработчика</p>
                <div class="donation-iframe-container" id="donation-container">
                    ${game.donationIframe || '<p class="no-donation">Поддержка для этой игры временно недоступна</p>'}
                </div>
            </div>
        </div>
    `;
}

// Вспомогательные функции
function getCategoryName(categoryKey) {
    const categories = {
        'action': 'Экшен',
        'strategy': 'Стратегия',
        'puzzle': 'Головоломка',
        'adventure': 'Приключение',
        'arcade': 'Аркада',
        'rpg': 'RPG',
        'simulation': 'Симулятор',
        'sports': 'Спорт',
        'casual': 'Казуальная'
    };
    return categories[categoryKey] || 'Другое';
}

function getPlatformName(platformKey) {
    const platforms = {
        'mobile': '📱 Мобильная',
        'pc': '💻 PC',
        'web': '🌐 Веб',
        'console': '🎮 Консоль'
    };
    return platforms[platformKey] || 'Другая';
}

// Загрузка деталей при загрузке страницы
document.addEventListener('DOMContentLoaded', loadGameDetails);