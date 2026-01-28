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
        'salmon-nordic': {
            category: 'salmon',
            title: 'Salmon Mi-Cuit "Velvet Texture"',
            img: 'assets/salmon_velvet.png',
            ingredients: [
                '140g Lomo de Salmón Atlántico',
                '10ml Dill-infused Oil (vibrant green)',
                '10g Снег из хрена (Horseradish Snow)',
                '5ml Эмульсия укропа',
                'Кристаллы морской соли'
            ],
            sauce: '<strong>Dill & Horseradish Snow:</strong> Насыщенное укропное масло (пробитое на 60°C и процеженное) + тертый замороженный корень хрена. Хрен натирается на Microplane непосредственно перед подачей для эффекта "снега".',
            steps: [
                'Используйте технологию Sous-Vide: 45°C в течение 18-20 минут до текстуры сливочного масла.',
                'Резко охладите в льду (не вскрывая пакет) для стабилизации цвета.',
                'Заготовка может храниться в вакууме до 3 дней.',
                'Отдача (30 сек): Достаньте из пакета, промокните салфеткой, выложите на тарелку.',
                'Украсьте каплями зеленого масла и посыпьте свежим "снегом" из хрена.'
            ],
            equipment: 'Вакууматор, Пароконвектомат (режим пара) или Sous-vide, Терка Microplane.',
            cost: '€6.50',
            pvp: '€28.00',
            margin: '+€21.50'
        },
        'salmon-cornetto': {
            category: 'salmon',
            title: 'Crispy Cone & Salmon Tartare',
            img: 'assets/salmon_cone.png',
            ingredients: [
                '60g Salmon Tartare (fine dice)',
                '2 Мини-рожка (Crispy Cones)',
                '10g Икра форели (Ikura)',
                '2ml Кунжутное масло',
                'Цедра лайма'
            ],
            sauce: '<strong>Lime & Sesame Binder:</strong> Сверхлегкая заправка из сока лайма, капли кунжутного масла и микро-слайсов сибулета. Задача — подчеркнуть свежесть лосося, не перебивая его жирность.',
            steps: [
                'Заранее приготовьте рожки (или используйте готовые), храните в сухом месте.',
                'Нарежьте лосось кубиком 3х3мм (из холодного цеха).',
                'Заправьте тартар маслом и лаймом непосредственно под заказ.',
                'Плотно заполните рожки тартаром (используйте кондитерский мешок без насадки).',
                'Венчает композицию ложка икры форели.'
            ],
            equipment: 'Пинцет, Кондитерский мешок, Каменный держатель.',
            cost: '€4.20',
            pvp: '€18.00',
            margin: '+€13.80'
        },
        'salmon-rosette': {
            category: 'salmon',
            title: 'Beetroot Gravlax "Ruby Ribbon"',
            img: 'assets/salmon_gravlax.png',
            ingredients: [
                '120g Beetroot & Gin Cured Salmon',
                '15g Крем-сыр с лимонной цедрой',
                'Свежий укроп',
                'Джин (для маринада)'
            ],
            sauce: '<strong>Beetroot-Gin Marinade:</strong> Смесь тертой свеклы, джина, крупной соли и сахара (40/10/30/20). Окутывает рыбу, создавая рубиновую окантовку.',
            steps: [
                'Маринуйте филе в свекольной смеси 24 часа в холодильнике.',
                'Промойте под ледяной водой и обсушите перед нарезкой.',
                'Настройте слайсер на 1.5мм для получения "лент".',
                'Выложите ленты веером или в форме розы на холодную тарелку.',
                'Добавьте капли лимонного крем-сыра между складками рыбы.'
            ],
            equipment: 'Электрический слайсер, Холодильник.',
            cost: '€5.80',
            pvp: '€24.00',
            margin: '+€18.20'
        },
        'salmon-miso': {
            category: 'salmon',
            title: 'Miso Salmon "Fire & Ice"',
            img: 'assets/salmon_miso.png',
            ingredients: [
                '160g Salmon Prime Cut',
                '20ml Miso-Honey Glaze',
                '5g Взорванное киноа (Puffed Quinoa)',
                'Микро-зелень'
            ],
            sauce: '<strong>Sweet Miso Glaze:</strong> Паста белого мисо, мед, капля соевого соуса. Уваривается до густого сиропа. Хранится в диспенсере в теплом месте.',
            steps: [
                'Подготовьте стейк лосося (охлажденный).',
                'Нанесите слой глазури мисо на верхнюю часть.',
                'Используйте горелку: карамелизуйте глазурь до появления пузырьков и аромата умами (15-20 сек).',
                'Важно: сердцевина рыбы должна остаться прохладной и сырой (эффект Fire & Ice).',
                'Посыпьте взорванным киноа для хруста и подавайте немедленно.'
            ],
            equipment: 'Мощная газовая горелка (Blowtorch), Диспенсер.',
            cost: '€7.50',
            pvp: '€32.00',
            margin: '+€24.50'
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

    // Optimized Parallax Effect with requestAnimationFrame
    const parallaxBg = document.querySelector('.parallax-bg');
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!parallaxBg) return;
        if (!scrollTimeout) {
            window.requestAnimationFrame(() => {
                const speed = 0.5;
                const rect = parallaxBg.parentElement.getBoundingClientRect();
                const offset = window.pageYOffset - rect.top;
                parallaxBg.style.transform = `translateY(${offset * speed}px)`;
                scrollTimeout = null;
            });
            scrollTimeout = true;
        }
    }, { passive: true });

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

        let mouseTimeout;
        window.addEventListener('mousemove', (e) => {
            if (!mouseTimeout) {
                window.requestAnimationFrame(() => {
                    glow.style.left = `${e.clientX - 150}px`;
                    glow.style.top = `${e.clientY - 150}px`;
                    glow.style.opacity = '1';
                    mouseTimeout = null;
                });
                mouseTimeout = true;
            }
        }, { passive: true });
    }
});
