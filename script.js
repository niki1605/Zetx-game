


// Данные игр
const gamesData = [
    {
        id: 1,
        title: "Mem clicker",
        description: "Игра в жанре кликер, где ты можешь изменять скин кнопки на котором изображен интернет мем и сопровождается словами из этого мема.",
        category: "casual",
        platform: "mobile", // Добавляем платформу
        image: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/%D0%BE%D0%B1%D0%BB%D0%BE%D1%88%D0%BA%D0%B0%20ya.png",
        url: "https://www.rustore.ru/catalog/app/com.zetxplay.Memkliker",
        icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
        screenshots: [
            "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/%D1%81%D0%BA%D1%80%D0%B8%D0%BD%20%281%29.jpg",
            "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/%D1%81%D0%BA%D1%80%D0%B8%D0%BD%20%282%29.png"
        ]
    },
    {
         id: 2,
    title: "Colour man",
    description: "Colour man - это игра, где вам надо собрать шарики того же цвета, что и бегущий человечек, собирай шарики - набирай очки и уворачивайся от пик - сохраняй очки. Желаем хорошей игры!",
    category: "casual",
    platform: "mobile",
    image: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/Colour%20man/%D0%BE%D0%B1%D0%BB%D0%BE%D1%88%D0%BA%D0%B0.png",
    url: "https://www.rustore.ru/catalog/app/com.DefaultCompany.ranerRustore",
    icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
    screenshots: [
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/Colour%20man/2024-04-30_17-21-50.png",
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/Colour%20man/2024-04-30_17-19-04.png",
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/Colour%20man/2024-04-30_17-17-50.png"
    ]
    },
     {
       id: 3,
    title: "Викторина мемов",
    description: "Викторина мемов это игра про всеми нами любимые мемы, тут можно как и вспомнить бессмертную классику так и проверить знание на новые мемы. Так же в игре есть пасхалки которые будут прятаться в неправильных ответах. Качай игру и повеселись.",
    category: "casual",
    platform: "mobile",
    image: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%20%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B0%20%D0%BC%D0%B5%D0%BC%D0%BE%D0%B2/%D0%BE%D0%B1%D0%BB%D0%BE%D1%88%D0%BA%D0%B0.jpg",
    url: "https://www.rustore.ru/catalog/app/com.zetxplay.testmem",
    icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
    screenshots: [
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%20%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B0%20%D0%BC%D0%B5%D0%BC%D0%BE%D0%B2/scrin1.png",
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%20%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B0%20%D0%BC%D0%B5%D0%BC%D0%BE%D0%B2/scrin2.jpg",
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%20%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B0%20%D0%BC%D0%B5%D0%BC%D0%BE%D0%B2/scrin3%20%282%29.png"
    ]  
},
     {
    id: 4,
    title: "Dog Apple",
    description: "Вы попали в лес мемов! Вас заставили собирать яблоки, и на вас напал ходячий мем.",
    category: "adventure",
    platform: "pc",
    image: "https://vkplay.ru/hotbox/showcase/gamelocale/picture/44794e56-ed2f-430c-a82d-ff2c272a6f12.jpeg",
    url: "https://vkplay.ru/play/game/dog-apple",
    icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
    screenshots: [
        "https://vkplay.ru/pre_1068x600_resize/hotbox/showcase/gamehighlight/pic/e06455d0-e9c0-47f1-b524-82991ddb1a28.png?quality=85&format=webp",
        "https://vkplay.ru/pre_1068x600_resize/hotbox/showcase/gamehighlight/pic/94ba2413-f916-4383-b6fb-73cdeac7b482.png?quality=85&format=webp",
        "https://vkplay.ru/pre_1068x600_resize/hotbox/showcase/gamehighlightdraft/pic/e9c7a052-94e5-482a-98b3-30b314642f23.jpeg?quality=85&format=webp",
        "https://vkplay.ru/pre_1068x600_resize/hotbox/showcase/gamehighlight/pic/64fe9394-3350-40b6-b9b5-84ca96f553f2.png?quality=85&format=webp"

    ]
    
},
     {
    id: 5,
    title: "Создай игру Тебе сюда",
    description: "Это конструктор для разработки игр, где можно не только сделать свою игру, но и поиграть в другие игры разработчиков.",
    category: "simulation",
    platform: "all",
    image: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B9%20%D0%B8%D0%B3%D1%80%D1%83%20%D0%A2%D0%B5%D0%B1%D0%B5%20%D1%81%D1%8E%D0%B4%D0%B0/%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0%20.jpg",
    url: "https://yandex.ru/games/app/458320",
    icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
    screenshots: [
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B9%20%D0%B8%D0%B3%D1%80%D1%83%20%D0%A2%D0%B5%D0%B1%D0%B5%20%D1%81%D1%8E%D0%B4%D0%B0/scrin1.jpg",
        "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B9%20%D0%B8%D0%B3%D1%80%D1%83%20%D0%A2%D0%B5%D0%B1%D0%B5%20%D1%81%D1%8E%D0%B4%D0%B0/scrin2.jpg"


    ]
    
},
     {
    id: 6,
    title: "Black Horror",
    description: "Игра в жанре хоррор в полуоткрытом мире, где нужно уничтожить монстриков и спастись самому.",
    category: "horror",
    platform: "pc",
    image: "https://developers.vkplay.ru/hotbox/showcase/gamelocale/picture/01d966f9-5024-4cea-a766-e4f736b96c16.jpg",
    url: "https://vkplay.ru/play/game/black-horror/?mt_link_id=p0gtr6",
    icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
    screenshots: [
        "https://vkplay.ru/hotbox/showcase/gamehighlight/pic/acc6192f-498a-4876-b19f-fe7a1bc9bd1c.png",
        "https://vkplay.ru/hotbox/showcase/gamehighlight/pic/1a274927-79f9-4e46-9dc7-459b884011d9.png",
        "https://vkplay.ru/hotbox/showcase/gamehighlight/pic/055417d7-a138-4db8-b89f-6e1695767252.png",
        "https://vkplay.ru/hotbox/showcase/gamehighlight/pic/aaeb20d8-a0f0-4348-a03a-7873c950b380.png"


    ]
    
},
     {
    id: 7,
    title: "Tactical Field",
    description: "Tactical Field: Где победа - это продуманный шаг! ⚔️🌎Добро пожаловать в Tactical Field – ваш следующий уровень тактического экшена! Представьте масштабные сражения, обогащенные глубокой тактикой, свободой выбора и инновационными фишками. Это не просто перестрелка – это современная война.",
    category: "action",
    platform: "pc",
    image: "https://vkplay.ru/hotbox/showcase/gamelocale/picture_horizontal/dcac998e-00f3-4c18-b02f-213d55cd4bd2.jpg",
    url: "https://vkplay.ru/play/game/tactical-field",
    icon: "https://gameforstore.hb.ru-msk.vkcloud-storage.ru/mem%20clicker/ikonka.jpg",
    screenshots: [
        "https://vkplay.ru/hotbox/showcase/gamehighlight/pic/7d1c0010-6de8-4f98-972f-40a935576984.png",
        "https://vkplay.ru/hotbox/showcase/gamehighlight/pic/84910b12-77c1-415e-a6de-d2e3825ca902.png",
        "https://vkplay.ru/hotbox/showcase/gamehighlightdraft/pic/2d513f28-884d-4a06-a1d4-79e39f674ced.jpeg",
        "https://vkplay.ru/hotbox/showcase/gamehighlight/pic/3015d92f-db4c-4d79-ab38-da051c21377b.png"


    ]
    
}

];

// DOM элементы
const gamesContainer = document.getElementById('games-container');
const gameForm = document.getElementById('game-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const notification = document.getElementById('notification');
const addGameModal = document.getElementById('add-game-modal');
const openAddGameBtn = document.getElementById('open-add-game');
const openAddGameHeroBtn = document.getElementById('open-add-game-hero');
const openAddGameFooterBtn = document.getElementById('open-add-game-footer');
const closeAddGameBtn = document.getElementById('close-add-game');
const closeAddGameModal = addGameModal.querySelector('.close');

// Загрузка игр при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadGames('all');
    setupEventListeners();
});

// Настройка обработчиков событий
function setupEventListeners() {
    // Фильтрация игр
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Обновляем активную кнопку
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Загружаем игры по фильтру
            loadGames(filter);
        });
    });
    
    // Отправка формы
    gameForm.addEventListener('submit', handleFormSubmit);
    
    // Закрытие модального окна добавления игры
    closeAddGameBtn.addEventListener('click', function() {
        addGameModal.style.display = 'none';
    });
    
    closeAddGameModal.addEventListener('click', function() {
        addGameModal.style.display = 'none';
    });
    
    // Открытие модального окна добавления игры
    openAddGameBtn.addEventListener('click', openAddGameModal);
    openAddGameHeroBtn.addEventListener('click', openAddGameModal);
    openAddGameFooterBtn.addEventListener('click', openAddGameModal);
    
    // Закрытие модальных окон при клике вне их
    window.addEventListener('click', function(event) {
        if (event.target === addGameModal) {
            addGameModal.style.display = 'none';
        }
    });
    
    // Плавная прокрутка к секциям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Обработчик выбора платформы в форме
    document.querySelectorAll('input[name="platform"]').forEach(radio => {
        radio.addEventListener('change', updateScreenshotWarnings);
    });
    
    // Обновляем рекомендации при изменении размера окна
    window.addEventListener('resize', updateImageRecommendations);
    
    // Инициализируем предупреждения при открытии формы
    openAddGameBtn.addEventListener('click', function() {
        setTimeout(() => {
            updateScreenshotWarnings();
            updateImageRecommendations();
        }, 100);
    });
    
    // Валидация полей с изображениями
    gameForm.addEventListener('input', function(e) {
        if (e.target.id === 'icon-url' || e.target.id === 'screenshots-url') {
            validateImageFields();
        }
    });
}

// Загрузка и отображение игр
function loadGames(filter) {
    gamesContainer.innerHTML = '';
    
    const filteredGames = filter === 'all' 
        ? gamesData 
        : gamesData.filter(game => game.category === filter);
    
    if (filteredGames.length === 0) {
        gamesContainer.innerHTML = '<p class="no-games">Игры не найдены</p>';
        return;
    }
    
    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesContainer.appendChild(gameCard);
    });
}

// Создание карточки игры
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('data-category', game.category);
    
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" onerror="this.src='https://via.placeholder.com/300x200/283593/ffffff?text=No+Image'">
        <div class="game-card-content">
            <h3 class="game-card-title">${game.title}</h3>
            <p class="game-card-description">${game.description}</p>
            <div class="game-card-footer">
                <span class="game-card-category">${getCategoryName(game.category)}</span>
                <button class="btn btn-small btn-primary" data-id="${game.id}">Подробнее</button>
            </div>
        </div>
    `;
    
    // Обработчик для кнопки "Подробнее"
    card.querySelector('button').addEventListener('click', function() {
        goToGameDetail(game.id);
    });
    
    return card;
}

// Получение названия категории по ключу
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
        'casual': 'Казуальная',
        'horror': 'Хоррор'
    };
    return categories[categoryKey] || 'Другое';
}

// Функция для получения названия платформы
function getPlatformName(platform) {
    const platforms = {
        'pc': 'ПК',
        'mobile': 'Мобильная',
        'all': 'Все платформы'
    };
    return platforms[platform] || 'Неизвестно';
}

// Функция для получения иконки платформы
function getPlatformIcon(platform) {
    const icons = {
        'pc': '💻',
        'mobile': '📱',
        'all': '🌐'
    };
    return icons[platform] || '🎮';
}

// Функция для получения класса платформы
function getPlatformClass(platform) {
    return `platform-${platform}`;
}

// Функция открытия модального окна добавления игры
function openAddGameModal() {
    addGameModal.style.display = 'block';
    // Сброс формы при открытии
    gameForm.reset();
}

// Функция для обновления предупреждений о скриншотах в форме
function updateScreenshotWarnings() {
    const platform = document.querySelector('input[name="platform"]:checked');
    if (!platform) return;
    
    // Скрываем все предупреждения
    document.querySelectorAll('.screenshot-warning').forEach(warning => {
        warning.classList.remove('show');
    });
    
    // Показываем нужное предупреждение
    const selectedWarning = document.querySelector(`.screenshot-warning.${platform.value}`);
    if (selectedWarning) {
        selectedWarning.classList.add('show');
    }
}

// Функция для проверки разрешения экрана
function getScreenType() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return width > height ? 'desktop' : 'mobile';
}

// Функция для обновления рекомендаций в реальном времени
function updateImageRecommendations() {
    const screenType = getScreenType();
    const requirements = document.querySelectorAll('.requirement-item');
    
    requirements.forEach(item => {
        if (item.classList.contains('desktop-warning')) {
            item.style.display = screenType === 'desktop' ? 'flex' : 'none';
        }
        if (item.classList.contains('mobile-warning')) {
            item.style.display = screenType === 'mobile' ? 'flex' : 'none';
        }
    });
}

// Функция для валидации URL изображений
function validateImageUrl(url) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    return imageExtensions.some(ext => url.toLowerCase().includes(ext));
}

// Функция для валидации полей с изображениями
function validateImageFields() {
    const iconUrl = document.getElementById('icon-url').value;
    const screenshotsUrl = document.getElementById('screenshots-url').value;
    
    if (iconUrl && !validateImageUrl(iconUrl)) {
        showFieldWarning('icon-url', 'Ссылка может не вести на изображение');
    } else {
        hideFieldWarning('icon-url');
    }
    
    if (screenshotsUrl) {
        const screenshotUrls = screenshotsUrl.split(',').map(url => url.trim());
        const invalidUrls = screenshotUrls.filter(url => url && !validateImageUrl(url));
        
        if (invalidUrls.length > 0) {
            showFieldWarning('screenshots-url', 'Некоторые ссылки могут не вести на изображения');
        } else {
            hideFieldWarning('screenshots-url');
        }
    } else {
        hideFieldWarning('screenshots-url');
    }
}

// Функции для показа/скрытия предупреждений полей
function showFieldWarning(fieldId, message) {
    let warningElement = document.getElementById(`${fieldId}-warning`);
    if (!warningElement) {
        const field = document.getElementById(fieldId);
        warningElement = document.createElement('div');
        warningElement.id = `${fieldId}-warning`;
        warningElement.className = 'field-warning';
        warningElement.style.cssText = `
            color: #ffd54f;
            font-size: 0.8rem;
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
        `;
        warningElement.innerHTML = `⚠️ ${message}`;
        field.parentNode.appendChild(warningElement);
    }
    warningElement.textContent = `⚠️ ${message}`;
    warningElement.style.display = 'flex';
}

function hideFieldWarning(fieldId) {
    const warningElement = document.getElementById(`${fieldId}-warning`);
    if (warningElement) {
        warningElement.style.display = 'none';
    }
}

// Обработка отправки формы
function handleFormSubmit(e) {
    e.preventDefault();
    
    const platform = document.querySelector('input[name="platform"]:checked');
    if (!platform) {
        showNotification('Пожалуйста, выберите платформу игры', 'error');
        return;
    }
    
    // Сбор данных формы
    let formData = {
        dev_email: document.getElementById('dev-email').value,
        game_title: document.getElementById('game-title').value,
        game_description: document.getElementById('game-description').value,
        game_url: document.getElementById('game-url').value,
        icon_url: document.getElementById('icon-url').value,
        screenshots_url: document.getElementById('screenshots-url').value,
        donation_url: document.getElementById('donation-url').value || 'Не указана',
        game_category: document.getElementById('game-category').value,
        platform: platform.value
    };
    
    // Отправка через EmailJS
    emailjs.send('service_lebtcym', 'template_plh62yn', formData)
        .then(function(response) {
            showNotification('Игра успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
            gameForm.reset();
            addGameModal.style.display = 'none';
        }, function(error) {
            showNotification('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.', 'error');
            console.error('Ошибка EmailJS:', error);
        });
}

// Показать уведомление
function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}
/*
// Функция для обработки ошибок загрузки изображений
function handleImageError(img) {
    img.src = 'https://via.placeholder.com/300x200/283593/ffffff?text=Image+Not+Found';
    img.alt = 'Изображение не найдено';
}
*/
// Добавляем глобальные функции для использования в HTML
//window.handleImageError = handleImageError;

// Функция для перехода на детальную страницу
function goToGameDetail(gameId) {
    // Сохраняем ID выбранной игры в localStorage
    localStorage.setItem('selectedGameId', gameId);
    // Переходим на страницу game.html
    window.location.href = 'game.html';
}



// Загрузка игр при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadGames('all');
    setupEventListeners();
});