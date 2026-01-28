document.addEventListener('DOMContentLoaded', () => {
    const dishData = {
        tataki: {
            category: 'tuna',
            title: 'Tuna Tataki "Smoky Aburi"',
            img: 'assets/tuna_tataki_aburi.png',
            ingredients: [
                '150g Lomo de Atún Rojo de Almadraba',
                '15ml Soja Premium (Kikkoman)',
                '5ml Mirin Hontery',
                '10g Micro-mezcla de brotes',
                '2g Sésamo tostado bicolor',
                '20ml Yuzu-Ponzu Dressing'
            ],
            sauce: '<strong>Citrus Ponzu "Humo":</strong> Смешайте соевый соус, мирин и сок юдзу в пропорции 3:1:1. Добавьте каплю жидкого дыма или прокоптите соус в вакууме. Дайте настояться 4 часа перед использованием.',
            steps: [
                'Маринуйте ломо тунца в сое с мирином 15 минут.',
                'Используйте горелку на полной мощности: опалите внешние 2мм со всех сторон до карамелизации.',
                'Резко охладите в шоковой заморозке на 2 минуты для остановки жара.',
                'Нарежьте на слайсере (уровень 5) для идеальных срезов по 0.5см.',
                'Выложите веером, полейте холодным соусом Понзу.'
            ],
            equipment: 'Промышленная горелка, Слайсер, Вакууматор (для соуса).',
            cost: '€7.50',
            pvp: '€26.00',
            margin: '+€18.50'
        },
        crispy: {
            category: 'tuna',
            title: 'Crispy Rice & Spicy Tuna',
            img: 'assets/crispy_rice_tuna_tartare.png',
            ingredients: [
                '80g Recortes de Atún (Cost Saving)',
                '2 брусочка риса для суши (прессованный)',
                '15ml Spicy Mayo Mix',
                '2ml Truffle Oil (Black)',
                '1 слайс Халапеньо',
                '1g Черная морская соль'
            ],
            sauce: '<strong>Spicy Truffle Mayo:</strong> Японский майонез Kewpie смешать со Шрирачей (20%) и трюфельным маслом (5%). Пробить блендером до шелковой текстуры. Хранить в диспенсере.',
            steps: [
                'Разогрейте фритюр до 180°C.',
                'Жарьте блоки риса 2.5 мин до состояния жесткой золотистой корочки.',
                'Порубите обрезки тунца (cost-saving) мелким кубиком и смешайте со Spicy Mayo.',
                'На горячий рис выложите холодный тартар (контраст температур).',
                'Украсьте слайсом халапеньо (слайсер G1).'
            ],
            equipment: 'Фритюрница, Погружной блендер, Слайсер.',
            cost: '€4.20',
            pvp: '€21.00',
            margin: '+€16.80'
        },
        mosaic: {
            category: 'tuna',
            title: 'Mediterranean Tuna "Mosaic"',
            img: 'assets/tuna_carpaccio_mosaic.png',
            ingredients: [
                '110g Akami de Atún Rojo (Grade A)',
                '10g Каперсы соленые (промытые)',
                '5g Цедра лимона (свежая)',
                '25ml ACEITE Arbequina Extra Virgen',
                'Микрозелень Borage',
                'Кристаллы соли Maldon'
            ],
            sauce: '<strong>Arbequina Infusion:</strong> Взбить масло Arbequina с капелькой лимонного сока и мелко рублеными каперсами (50/50). Создать эмульсию, которая будет "обволакивать" рыбу.',
            steps: [
                'Подморозьте тунец в морозилке 30 мин для жесткости.',
                'Настройте слайсер на Уровень 1 (прозрачный слайс).',
                'Выложите слайсы на тарелку по кругу внахлест.',
                'Равномерно нанесите эмульсию Arbequina кисточкой.',
                'Посыпьте цедрой и кристаллами соли.'
            ],
            equipment: 'Электрический слайсер, Терка для цедры Microplane.',
            cost: '€5.50',
            pvp: '€24.00',
            margin: '+€18.50'
        },
        gilda: {
            category: 'tuna',
            title: 'VIP Gilda "Roses"',
            img: 'assets/vip_gilda_collection.png',
            ingredients: [
                '40g Jamón Ibérico de Bellota',
                '2 шт. Оливки Гордаль (Jumbo)',
                '2 шт. Перец Гиндилья',
                '10ml EVOO Infusion',
                'Авторская шпажка'
            ],
            sauce: '<strong>Ibérico Infusion:</strong> Масло настоянное на чесноке и розмарине. Используется для того, чтобы подчеркнуть аромат хамона и "связать" остроту перца и соль оливки.',
            steps: [
                'Нарежьте хамон на слайсере максимально тонко.',
                'Сформируйте из слайсов "Розу", плотно скручивая их вокруг центра.',
                'Сборка: Оливка -> Роза Хамона -> Перец Гиндилья.',
                'Полейте настоянным маслом непосредственно перед подачей.'
            ],
            equipment: 'Электрический слайсер, Дизайнерские шпажки.',
            cost: '€3.80',
            pvp: '€16.00',
            margin: '+€12.20'
        },
        'salmon-tataki': {
            category: 'salmon',
            title: 'Salmon Tataki "Citrus Aburi"',
            img: 'assets/salmon_tataki_aburi.png',
            ingredients: [
                '150g Fresh Atlantic Salmon (Norwegian)',
                '10ml Citrus Cream (Yuzu/Lime)',
                'Micro-coriander',
                'Black sesame seeds',
                'Maldon Salt crystals'
            ],
            sauce: '<strong>Yuzu-Cream Emulsion:</strong> Смешайте густые сливки высокой жирности с соком и цедрой юдзу (5:1). Добавьте щепотку белого перца. Соус должен быть холодным и плотным.',
            steps: [
                'Опалите только края salmon-lomo горелкой (эффект Aburi).',
                'Нарежьте на слайсы 0.7см.',
                'Нанесите по одной капле Citrus Cream на каждый слайс.',
                'Украсьте микрозеленью и черным сезамом.'
            ],
            equipment: 'Горелка, Острый нож (Yanagiba), Кондитерский мешок.',
            cost: '€6.20',
            pvp: '€24.00',
            margin: '+€17.80'
        },
        'salmon-crispy': {
            category: 'salmon',
            title: 'Crispy Rice & Salmon Tartare',
            img: 'assets/crispy_rice_salmon_tartare.png',
            ingredients: [
                '80g Tartar de Salmón Fresco',
                '2 брусочка риса для суши (фри)',
                '5ml Spicy Mayo (Sriracha based)',
                'Golden Leaf (edible)',
                'Jalapeño slice'
            ],
            sauce: '<strong>Spicy Salmon Mix:</strong> Порубите лосось мелким кубиком, смешайте с японским майонезом и шрирачей. Дайте постоять 10 минут для объединения вкусов.',
            steps: [
                'Обжарьте рис во фритюре до "каменной" золотистой корочки.',
                'Выложите горку тартара сверху.',
                'Добавьте слайс халапеньо и частицу золота для VIP подачи.'
            ],
            equipment: 'Фритюрница, Пинцет.',
            cost: '€4.50',
            pvp: '€22.00',
            margin: '+€17.50'
        },
        'salmon-mosaic': {
            category: 'salmon',
            title: 'Salmon Mosaic "Ocean Sun"',
            img: 'assets/salmon_carpaccio_mosaic.png',
            ingredients: [
                '110g Premium Salmon Lomo',
                'Lemon Pearls (molecular)',
                'Caper-infused oil',
                'Edible flowers (violas)',
                'Dill oil'
            ],
            sauce: '<strong>Herbal Fusion:</strong> Масло, настоянное на укропе и каперсах, смешанное с лимонными жемчужинами. Легкая кислотность подчеркивает жирность лосося.',
            steps: [
                'Тончайшая нарезка на слайсере (уровень 1.5).',
                'Выкладка идеальным кругом (мозаика).',
                'Декорирование жемчужинами и цветами.'
            ],
            equipment: 'Слайсер, Пинцет.',
            cost: '€5.80',
            pvp: '€25.00',
            margin: '+€19.20'
        },
        'salmon-gilda': {
            category: 'salmon',
            title: 'Salmon Gilda "Silk"',
            img: 'assets/salmon_tartare_gilda.png',
            ingredients: [
                '40g Silky Salmon Roll',
                '1 Gordal Olive XL',
                '1 Silver Anchovy (Boquerón)',
                'Herb oil glaze'
            ],
            sauce: '<strong>Mediterranean Glaze:</strong> Оливковое масло экстра-вирджен, настоянное на свежих травах. Используется для придания блеска и тонкого аромата.',
            steps: [
                'Сложите слайс лосося в "шелковую" складку.',
                'Нанизайте на шпажку вместе с оливкой и анчоусом.',
                'Покройте глазурью из трав.'
            ],
            equipment: 'Дизайнерские шпажки, Кисточка для масла.',
            cost: '€4.10',
            pvp: '€18.00',
            margin: '+€13.90'
        }
    };

    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalIngredients = document.getElementById('modal-ingredients');
    const modalSauce = document.getElementById('modal-sauce');
    const modalSteps = document.getElementById('modal-steps');
    const modalEqui = document.getElementById('modal-equi');
    const modalCost = document.getElementById('modal-cost');
    const modalPvp = document.getElementById('modal-pvp');
    const modalMargin = document.getElementById('modal-margin');

    // Category Switching
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuSection = document.querySelector('.menu-grid');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // UI Toggle
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Grid Animation
            menuSection.style.opacity = '0';
            setTimeout(() => {
                document.querySelectorAll('.menu-card').forEach(card => {
                    const dish = card.dataset.dish;
                    if (dishData[dish].category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                menuSection.style.opacity = '1';
                // Trigger reveal for new items
                document.querySelectorAll('.menu-card').forEach(el => observer.observe(el));
            }, 300);
        });
    });

    // Open Modal
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', () => {
            const dish = card.dataset.dish;
            const data = dishData[dish];

            modalImg.src = data.img;
            modalTitle.textContent = data.title;
            modalIngredients.innerHTML = data.ingredients.map(i => `<li>${i}</li>`).join('');
            modalSauce.innerHTML = data.sauce;
            modalSteps.innerHTML = data.steps.map(s => `<li>${s}</li>`).join('');
            modalEqui.textContent = data.equipment;
            modalCost.textContent = data.cost;
            modalPvp.textContent = data.pvp;
            modalMargin.textContent = data.margin;

            modal.classList.add('active');
            modalContent.classList.remove('sheet-active');
            document.body.classList.add('modal-open');
        });
    });

    // Interaction triggers
    document.querySelector('.btn-info-trigger').addEventListener('click', () => {
        modalContent.classList.add('sheet-active');
    });

    document.querySelector('.btn-close-sheet').addEventListener('click', () => {
        modalContent.classList.remove('sheet-active');
    });

    // Close buttons
    document.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    });

    document.querySelector('.modal-backdrop').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    });

    // Parallax Effect for Atmosphere Section
    const parallaxBg = document.querySelector('.parallax-bg');
    window.addEventListener('scroll', () => {
        if (!parallaxBg) return;
        const speed = 0.5;
        const rect = parallaxBg.parentElement.getBoundingClientRect();
        const offset = window.pageYOffset - rect.top;
        parallaxBg.style.transform = `translateY(${offset * speed}px)`;
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .economic-box, .lifestyle-item').forEach(el => {
        observer.observe(el);
    });

    // Add subtle ambient glow tracking mouse (Desktop only)
    if (window.innerWidth > 1024) {
        const glow = document.createElement('div');
        glow.className = 'glow-accent';
        document.body.appendChild(glow);

        window.addEventListener('mousemove', (e) => {
            glow.style.left = `${e.clientX - 150}px`;
            glow.style.top = `${e.clientY - 150}px`;
            glow.style.opacity = '1';
        });
    }
});
