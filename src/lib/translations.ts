export type Language = 'UZ' | 'RU' | 'EN';

export const translations = {
  EN: {
    nav: {
      services: 'Services',
      about: 'About',
      deals: 'Hot Deals',
      contact: 'Contact',
      call: 'Call Us Now',
      logoSubtitle: 'Great Travel Service',
      logoAlt: 'GTS Logo',
      phone: '+998 90 996-43-43',
    },
    hero: {
      badge: 'Luxury Travel Experience',
      title: 'Travel Without',
      titleAccent: 'Limits',
      subtext: 'Hotels | Flights | Visas | Transfers',
      subtext2: 'Discover the world with GTS premium service.',
      ctaSelection: 'Get Tour in 5 Minutes',
      ctaDeals: 'View Hot Deals',
      scroll: 'Scroll',
      imgAlt: 'Luxury Travel',
    },
    services: {
      badge: 'Our Expertise',
      title: 'Premium Services',
      hotels: {
        title: 'Hotels',
        desc: 'Exclusive access to 5-star resorts and boutique hotels worldwide.',
        details: 'We partner with the world\'s most prestigious hotel chains to bring you unparalleled luxury and comfort.',
      },
      flights: {
        title: 'Flights',
        desc: 'Business and First Class experiences at competitive rates.',
        details: 'Fly in style with our premium airline partners. We handle everything from seat selection to lounge access.',
      },
      visas: {
        title: 'Visas',
        desc: 'Fast-track visa processing for over 150 countries.',
        details: 'Our expert team handles the complexities of visa applications, documentation, and embassy appointments.',
      },
      transfers: {
        title: 'Transfers',
        desc: 'Premium private transfers and chauffeur services.',
        details: 'Arrive at your destination with ease. Our fleet of luxury vehicles and professional chauffeurs provide safe travel.',
      },
      learnMore: 'Learn More',
      showLess: 'Show Less',
    },
    trust: {
      badge: 'Our Legacy',
      title: 'A Decade of',
      titleAccent: 'Excellence',
      desc: 'Since 2013, we have been crafting unforgettable journeys for discerning travelers. Our commitment to luxury, precision, and personalized service has made us a leader in the premium travel industry.',
      stats: {
        since: 'Since',
        tourists: 'Tourists',
        selection: 'Selection',
        deals: 'Hot Deals',
        suffixMin: ' min',
        suffixTourists: '+',
        suffixDeals: '/7',
      },
      satisfaction: 'Customer Satisfaction',
      bgText: 'TRUSTED SINCE 2013',
      quote: 'Travel is the only thing you buy that makes you richer.',
      imgAlt: 'Adventure',
    },
    deals: {
      badge: 'Exclusive Offers',
      title: 'Hot',
      titleAccent: 'Tours',
      ending: 'Ending Soon',
      book: 'Book Now',
      priceLabel: 'Price starts from',
      tours: [
        {
          title: 'Maldives Paradise',
          location: 'Maafushi Island',
          badge: 'Hot Deal',
        },
        {
          title: 'Dubai Luxury',
          location: 'Palm Jumeirah',
          badge: 'Bestseller',
        },
        {
          title: 'Swiss Alps Escape',
          location: 'Zermatt',
          badge: 'Limited',
        },
        {
          title: 'Parisian Nights',
          location: 'Eiffel Tower View',
          badge: 'Romantic',
        },
        {
          title: 'Bali Zen Retreat',
          location: 'Ubud',
          badge: 'Trending',
        },
        {
          title: 'Tokyo Neon Lights',
          location: 'Shinjuku',
          badge: 'New',
        },
        {
          title: 'New York Skyline',
          location: 'Manhattan',
          badge: 'Popular',
        }
      ]
    },
    whyUs: {
      badge: 'Why Choose Us',
      title: 'The GTS',
      titleAccent: 'Difference',
      items: [
        {
          title: 'Expert Guidance',
          desc: 'Our specialists have visited 100+ countries to give you real advice.'
        },
        {
          title: 'Premium Support',
          desc: '24/7 concierge service for all our clients worldwide.'
        },
        {
          title: 'Exclusive Access',
          desc: 'Get access to hidden gems and private tours not available elsewhere.'
        }
      ],
      quote: 'The best travel agency in Uzbekistan. Everything was perfect from start to finish.',
      author: 'Sardor M.',
      authorTitle: 'Verified Traveler',
      imgAlt: 'Travel Experience',
    },
    booking: {
      title: 'Fast Booking',
      desc: 'Get your personalized tour selection in just 5 minutes.',
      name: 'Full Name',
      phone: 'Phone Number',
      destination: 'Message',
      placeholderName: 'John Doe',
      placeholderDest: 'What are you interested in?',
      cta: 'Get Selection in 5 Minutes',
      destinations: ['Maldives', 'Dubai', 'Switzerland', 'Paris', 'Bali', 'Tokyo', 'New York', 'London'],
      success: 'Message sent successfully!',
      error: 'Something went wrong. Please try again.',
      loading: 'Sending...',
      callLabel: 'Direct Call',
      telegramLabel: 'Telegram Support',
      formDesc: "Fill out the form and we'll contact you within 5 minutes.",
      phonePlaceholder: '+998 90 000-00-00',
    },
    location: {
      title: 'Visit Our',
      titleAccent: 'Office',
      address: 'Address',
      addressVal: 'Tashkent city, Shota Rustaveli str., 1st dead end, house 6',
      phone: 'Phone',
      hours: 'Working Hours',
      monSat: 'Mon–Sat: 09:00–22:00',
      break: 'Break: 13:00–14:00',
      sunday: 'Sunday: Closed',
      directions: 'Get Directions',
    },
    footer: {
      about: 'Premium travel services since 2013. We create unique experiences for those who value luxury and comfort.',
      services: 'Services',
      serviceItems: {
        hotels: 'Hotels',
        flights: 'Flights',
        visas: 'Visas',
        transfers: 'Transfers',
      },
      company: 'Company',
      companyItems: {
        about: 'About Us',
        deals: 'Hot Deals',
        contact: 'Contact',
        privacy: 'Privacy Policy',
      },
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe to get exclusive luxury travel deals.',
      emailPlaceholder: 'Email Address',
      rights: 'All rights reserved.',
      bgText: 'GTS TRAVEL',
      companyName: 'GREAT TRAVEL SERVICE',
      logoAlt: 'GTS Logo',
      entry: 'Your journey begins here',
    },
    uzbekistan: {
      badge: 'Explore Uzbekistan',
      title: 'Timeless',
      titleAccent: 'Cities',
      subtitle: 'Discover timeless cities, rich culture, and unforgettable journeys',
      trust: '10,000+ Happy Clients',
      viewDetails: 'View Details',
      tours: [
        {
          name: 'Samarkand: The Pearl of the East',
          desc: 'Visit the majestic Registan Square and the eternal beauty of Bibi-Khanym Mosque.',
          duration: '3 Days / 2 Nights',
          price: 'From $250',
          img: 'https://images.unsplash.com/photo-1733586092622-1b3201e802a5?w=800&auto=format&fit=crop&q=80'
        },
        {
          name: 'Bukhara: The Noble City',
          desc: 'Wander through the ancient streets of the Old City and discover the Ark Fortress.',
          duration: '2 Days / 1 Night',
          price: 'From $180',
          img: 'https://images.unsplash.com/photo-1653023102302-247f5f0fbdd1?w=800&auto=format&fit=crop&q=80'
        },
        {
          name: 'Khiva: An Open-Air Museum',
          desc: 'Step back in time in the perfectly preserved inner city of Itchan Kala.',
          duration: '2 Days / 1 Night',
          price: 'From $220',
          img: 'https://images.unsplash.com/photo-1728115214399-ad40d93eb935?w=800&auto=format&fit=crop&q=80'
        }
      ]
    }
  },
  RU: {
    nav: {
      services: 'Услуги',
      about: 'О нас',
      deals: 'Горящие туры',
      contact: 'Контакты',
      call: 'Позвонить нам',
      logoSubtitle: 'Отличный туристический сервис',
      logoAlt: 'GTS Логотип',
      phone: '+998 90 996-43-43',
    },
    hero: {
      badge: 'Роскошный опыт путешествий',
      title: 'Путешествуйте без',
      titleAccent: 'границ',
      subtext: 'Отели | Авиабилеты | Визы | Трансферы',
      subtext2: 'Откройте мир с премиальным сервисом GTS.',
      ctaSelection: 'Подобрать тур за 5 минут',
      ctaDeals: 'Горящие предложения',
      scroll: 'Листайте',
      imgAlt: 'Роскошное путешествие',
    },
    services: {
      badge: 'Наш опыт',
      title: 'Премиум услуги',
      hotels: {
        title: 'Отели',
        desc: 'Эксклюзивный доступ к 5-звездочным курортам и бутик-отелям по всему миру.',
        details: 'Мы сотрудничаем с самыми престижными гостиничными сетями мира, чтобы обеспечить вам непревзойденную роскошь.',
      },
      flights: {
        title: 'Авиабилеты',
        desc: 'Бизнес и первый класс по конкурентоспособным ценам.',
        details: 'Летайте стильно с нашими премиальными авиакомпаниями-партнерами. Мы берем на себя все заботы.',
      },
      visas: {
        title: 'Визы',
        desc: 'Ускоренное оформление виз в более чем 150 стран.',
        details: 'Наша экспертная команда берет на себя все сложности оформления виз, документации и записи в посольства.',
      },
      transfers: {
        title: 'Трансферы',
        desc: 'Премиальные частные трансферы и услуги шофера.',
        details: 'Прибывайте в пункт назначения с легкостью. Наш парк роскошных автомобилей обеспечит комфорт.',
      },
      learnMore: 'Подробнее',
      showLess: 'Свернуть',
    },
    trust: {
      badge: 'Наше наследие',
      title: 'Десятилетие',
      titleAccent: 'совершенства',
      desc: 'С 2013 года мы создаем незабываемые путешествия для взыскательных туристов. Наша приверженность роскоши и персонализированному сервису сделала нас лидерами.',
      stats: {
        since: 'С года',
        tourists: 'Туристов',
        selection: 'Подбор',
        deals: 'Туров',
        suffixMin: ' мин',
        suffixTourists: '+',
        suffixDeals: '/7',
      },
      satisfaction: 'Удовлетворенность клиентов',
      bgText: 'ДОВЕРЯЮТ С 2013 ГОДА',
      quote: 'Путешествие — единственная вещь, покупая которую, вы становитесь богаче.',
      imgAlt: 'Приключение',
    },
    deals: {
      badge: 'Эксклюзивные предложения',
      title: 'Горящие',
      titleAccent: 'туры',
      ending: 'Скоро закончится',
      book: 'Забронировать',
      priceLabel: 'Цена начинается от',
      tours: [
        {
          title: 'Рай на Мальдивах',
          location: 'Остров Маафуши',
          badge: 'Горящее предложение',
        },
        {
          title: 'Роскошный Дубай',
          location: 'Пальма Джумейра',
          badge: 'Бестселлер',
        },
        {
          title: 'Альпийский побег',
          location: 'Церматт',
          badge: 'Ограничено',
        },
        {
          title: 'Парижские ночи',
          location: 'Вид на Эйфелеву башню',
          badge: 'Романтика',
        },
        {
          title: 'Бали Дзен Ретрит',
          location: 'Убуд',
          badge: 'В тренде',
        },
        {
          title: 'Огни Токио',
          location: 'Синдзюку',
          badge: 'Новинка',
        },
        {
          title: 'Скайлайн Нью-Йорка',
          location: 'Манхэттен',
          badge: 'Популярно',
        }
      ]
    },
    whyUs: {
      badge: 'Почему мы',
      title: 'GTS',
      titleAccent: 'Преимущества',
      items: [
        {
          title: 'Экспертное мнение',
          desc: 'Наши специалисты посетили более 100 стран, чтобы дать вам реальные советы.'
        },
        {
          title: 'Премиум поддержка',
          desc: 'Круглосуточный консьерж-сервис для всех наших клиентов по всему миру.'
        },
        {
          title: 'Эксклюзивный доступ',
          desc: 'Получите доступ к скрытым жемчужинам и частным турам, недоступным в других местах.'
        }
      ],
      quote: 'Лучшее туристическое агентство в Узбекистане. Все было идеально от начала до конца.',
      author: 'Сардор М.',
      authorTitle: 'Проверенный путешественник',
      imgAlt: 'Опыт путешествий',
    },
    booking: {
      title: 'Быстрое бронирование',
      desc: 'Получите персональный подбор тура всего за 5 минут.',
      name: 'Полное имя',
      phone: 'Номер телефона',
      destination: 'Сообщение',
      placeholderName: 'Иван Иванов',
      placeholderDest: 'Что вас интересует?',
      cta: 'Получить подбор за 5 минут',
      destinations: ['Мальдивы', 'Дубай', 'Швейцария', 'Париж', 'Бали', 'Токио', 'Нью-Йорк', 'Лондон'],
      success: 'Сообщение успешно отправлено!',
      error: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
      loading: 'Отправка...',
      callLabel: 'Прямой звонок',
      telegramLabel: 'Поддержка в Telegram',
      formDesc: 'Заполните форму, и мы свяжемся с вами в течение 5 минут.',
      phonePlaceholder: '+998 90 000-00-00',
    },
    location: {
      title: 'Посетите наш',
      titleAccent: 'офис',
      address: 'Адрес',
      addressVal: 'г. Ташкент, ул. Шота Руставели, 1-й тупик, дом 6',
      phone: 'Телефон',
      hours: 'Рабочие часы',
      monSat: 'Пн–Сб: 09:00–22:00',
      break: 'Перерыв: 13:00–14:00',
      sunday: 'Воскресенье: Закрыто',
      directions: 'Проложить маршрут',
    },
    footer: {
      about: 'Премиальные туристические услуги с 2013 года. Мы создаем уникальный опыт для тех, кто ценит роскошь.',
      services: 'Услуги',
      serviceItems: {
        hotels: 'Отели',
        flights: 'Авиабилеты',
        visas: 'Визы',
        transfers: 'Трансферы',
      },
      company: 'Компания',
      companyItems: {
        about: 'О нас',
        deals: 'Горящие туры',
        contact: 'Контакты',
        privacy: 'Политика конфиденциальности',
      },
      newsletter: 'Рассылка',
      newsletterDesc: 'Подпишитесь, чтобы получать эксклюзивные предложения.',
      emailPlaceholder: 'Электронная почта',
      rights: 'Все права защищены.',
      bgText: 'GTS ПУТЕШЕСТВИЯ',
      companyName: 'GREAT TRAVEL SERVICE',
      logoAlt: 'GTS Логотип',
      entry: 'Ваше путешествие начинается здесь',
    },
    uzbekistan: {
      badge: 'Исследуйте Узбекистан',
      title: 'Вечные',
      titleAccent: 'Города',
      subtitle: 'Откройте для себя древние города, богатую культуру и незабываемые путешествия',
      trust: '10,000+ Счастливых Клиентов',
      viewDetails: 'Подробнее',
      tours: [
        {
          name: 'Самарканд: Жемчужина Востока',
          desc: 'Посетите величественную площадь Регистан и вечную красоту мечети Биби-Ханум.',
          duration: '3 дня / 2 ночи',
          price: 'От $250',
          img: 'https://images.unsplash.com/photo-1733586092622-1b3201e802a5?w=800&auto=format&fit=crop&q=80'
        },
        {
          name: 'Бухара: Благородный Город',
          desc: 'Прогуляйтесь по древним улочкам Старого города и откройте для себя крепость Арк.',
          duration: '2 дня / 1 ночь',
          price: 'От $180',
          img: 'https://images.unsplash.com/photo-1653023102302-247f5f0fbdd1?w=800&auto=format&fit=crop&q=80'
        },
        {
          name: 'Хива: Музей под открытым небом',
          desc: 'Вернитесь в прошлое в прекрасно сохранившемся внутреннем городе Ичан-Кала.',
          duration: '2 дня / 1 ночь',
          price: 'От $220',
          img: 'https://images.unsplash.com/photo-1728115214399-ad40d93eb935?w=800&auto=format&fit=crop&q=80'
        }
      ]
    }
  },
  UZ: {
    nav: {
      services: 'Xizmatlar',
      about: 'Biz haqimizda',
      deals: 'Qaynoq turlar',
      contact: 'Kontaktlar',
      call: 'Bizga qo\'ng\'iroq qiling',
      logoSubtitle: 'Ajoyib sayohat xizmati',
      logoAlt: 'GTS Logotipi',
      phone: '+998 90 996-43-43',
    },
    hero: {
      badge: 'Hashamatli sayohat',
      title: 'Chegarasiz',
      titleAccent: 'sayohat qiling',
      subtext: 'Mehmonxonalar | Aviachiptalar | Vizalar | Transferlar',
      subtext2: 'GTS premium xizmati bilan dunyoni sayohat qiling.',
      ctaSelection: '5 daqiqada tur tanlash',
      ctaDeals: 'Qaynoq takliflar',
      scroll: 'Pastga tushing',
      imgAlt: 'Hashamatli sayohat',
    },
    services: {
      badge: 'Bizning tajribamiz',
      title: 'Premium xizmatlar',
      hotels: {
        title: 'Mehmonxonalar',
        desc: 'Butun dunyo bo\'ylab 5 yulduzli kurortlar va butik-mehmonxonalarga eksklyuziv kirish.',
        details: 'Biz sizga tengsiz hashamat va qulaylikni taqdim etish uchun dunyoning eng nufuzli mehmonxona tarmoqlari bilan hamkorlik qilamiz.',
      },
      flights: {
        title: 'Aviachiptalar',
        desc: 'Raqobatbardosh narxlarda biznes va birinchi toifali tajribalar.',
        details: 'Bizning premium aviakompaniya hamkorlarimiz bilan uslubda uching. Biz barcha masalalarni hal qilamiz.',
      },
      visas: {
        title: 'Vizalar',
        desc: '150 dan ortiq mamlakatlarga vizani tezlashtirilgan rasmiylashtirish.',
        details: 'Bizning ekspertlar jamoasi viza arizalari, hujjatlar va elchixonalarga yozilishning barcha murakkabliklarini hal qiladi.',
      },
      transfers: {
        title: 'Transferlar',
        desc: 'Premium shaxsiy transferlar va haydovchi xizmatlari.',
        details: 'Belgilangan joyga osonlik bilan yetib boring. Bizning hashamatli avtomobillar parkimiz qulaylikni ta\'minlaydi.',
      },
      learnMore: 'Batafsil',
      showLess: 'Yopish',
    },
    trust: {
      badge: 'Bizning merosimiz',
      title: 'O\'n yillik',
      titleAccent: 'mukammallik',
      desc: '2013-yildan beri biz sayohatchilar uchun unutilmas sayohatlarni yaratib kelmoqdamiz. Bizning hashamat va individual xizmatga bo\'lgan sadoqatimiz bizni yetakchiga aylantirdi.',
      stats: {
        since: 'Yildan beri',
        tourists: 'Sayyohlar',
        selection: 'Tanlov',
        deals: 'Turlar',
        suffixMin: ' daq',
        suffixTourists: '+',
        suffixDeals: '/7',
      },
      satisfaction: 'Mijozlar mamnuniyati',
      bgText: '2013-YILDAN ISHONCHLI',
      quote: 'Sayohat — sotib olganingizda sizni boy qiladigan yagona narsadir.',
      imgAlt: 'Sarguzasht',
    },
    deals: {
      badge: 'Eksklyuziv takliflar',
      title: 'Qaynoq',
      titleAccent: 'turlar',
      ending: 'Tez orada tugaydi',
      book: 'Band qilish',
      priceLabel: 'Narxlar quyidagidan boshlanadi',
      tours: [
        {
          title: 'Maldiv orollari jannati',
          location: 'Maafushi oroli',
          badge: 'Qaynoq taklif',
        },
        {
          title: 'Hashamatli Dubay',
          location: 'Palm Jumeirah',
          badge: 'Eng ko\'p sotilgan',
        },
        {
          title: 'Shveytsariya Alp tog\'lari',
          location: 'Zermatt',
          badge: 'Cheklangan',
        },
        {
          title: 'Parij tunlari',
          location: 'Eyfel minorasi ko\'rinishi',
          badge: 'Romantika',
        },
        {
          title: 'Bali Zen Retreat',
          location: 'Ubud',
          badge: 'Trendda',
        },
        {
          title: 'Tokio neon chiroqlari',
          location: 'Shinjuku',
          badge: 'Yangi',
        },
        {
          title: 'Nyu-York osmoni',
          location: 'Manxetten',
          badge: 'Mashhur',
        }
      ]
    },
    whyUs: {
      badge: 'Nima uchun biz',
      title: 'GTS',
      titleAccent: 'Afzalliklari',
      items: [
        {
          title: 'Ekspert maslahati',
          desc: 'Bizning mutaxassislarimiz sizga haqiqiy maslahatlar berish uchun 100 dan ortiq mamlakatlarda bo\'lishgan.'
        },
        {
          title: 'Premium qo\'llab-quvvatlash',
          desc: 'Dunyo bo\'ylab barcha mijozlarimiz uchun 24/7 konsyerj xizmati.'
        },
        {
          title: 'Eksklyuziv kirish',
          desc: 'Boshqa joyda mavjud bo\'lmagan yashirin marvaridlar va shaxsiy turlarga ega bo\'ling.'
        }
      ],
      quote: 'O\'zbekistondagi eng yaxshi sayohat agentligi. Hammasi boshidan oxirigacha mukammal edi.',
      author: 'Sardor M.',
      authorTitle: 'Tasdiqlangan sayohatchi',
      imgAlt: 'Sayohat tajribasi',
    },
    booking: {
      title: 'Tezkor band qilish',
      desc: 'Atigi 5 daqiqada shaxsiy tur tanloviga ega bo\'ling.',
      name: 'To\'liq ism',
      phone: 'Telefon raqami',
      destination: 'Xabar',
      placeholderName: 'Ali Valiyev',
      placeholderDest: 'Sizni nima qiziqtirmoqda?',
      cta: '5 daqiqada tanlovni olish',
      destinations: ['Maldiv orollari', 'Dubay', 'Shveytsariya', 'Parij', 'Bali', 'Tokio', 'Nyu-York', 'London'],
      success: 'Xabar muvaffaqiyatli yuborildi!',
      error: 'Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.',
      loading: 'Yuborilmoqda...',
      callLabel: 'To\'g\'ridan-to\'g\'ri qo\'ng\'iroq',
      telegramLabel: 'Telegram orqali yordam',
      formDesc: 'Formani to\'ldiring va biz 5 daqiqa ichida siz bilan bog\'lanamiz.',
      phonePlaceholder: '+998 90 000-00-00',
    },
    location: {
      title: 'Bizning',
      titleAccent: 'ofisimiz',
      address: 'Manzil',
      addressVal: 'Toshkent sh., Shota Rustaveli ko\'ch., 1-berk ko\'cha, 6-uy',
      phone: 'Telefon',
      hours: 'Ish vaqti',
      monSat: 'Du–Sha: 09:00–22:00',
      break: 'Tanaffus: 13:00–14:00',
      sunday: 'Yakshanba: Yopiq',
      directions: 'Yo\'nalish olish',
    },
    footer: {
      about: '2013-yildan beri premium turistik xizmatlar. Biz hashamatni qadrlaydiganlar uchun noyob tajribalar yaratamiz.',
      services: 'Xizmatlar',
      serviceItems: {
        hotels: 'Mehmonxonalar',
        flights: 'Aviachiptalar',
        visas: 'Vizalar',
        transfers: 'Transferlar',
      },
      company: 'Kompaniya',
      companyItems: {
        about: 'Biz haqimizda',
        deals: 'Qaynoq turlar',
        contact: 'Kontaktlar',
        privacy: 'Maxfiylik siyosati',
      },
      newsletter: 'Yangiliklar',
      newsletterDesc: 'Eksklyuziv takliflarni olish uchun obuna bo\'ling.',
      emailPlaceholder: 'Elektron pochta',
      rights: 'Barcha huquqlar himoyalangan.',
      bgText: 'GTS SAYOHAT',
      companyName: 'GREAT TRAVEL SERVICE',
      logoAlt: 'GTS Logotipi',
      entry: 'Sayohat shu yerdan boshlanadi',
    },
    uzbekistan: {
      badge: 'O\'zbekiston bo\'ylab sayohat qiling',
      title: 'Boqiy',
      titleAccent: 'Shaharlar',
      subtitle: 'Boqiy shaharlar, boy madaniyat va unutilmas sayohatlarni kashf eting',
      trust: '10,000+ Mamnun Mijozlar',
      viewDetails: 'Batafsil',
      tours: [
        {
          name: 'Samarqand: Sharq gavhari',
          desc: 'Muhtasham Registon maydoni va Bibi-Xonim masjidining boqiy go\'zalligini ko\'ring.',
          duration: '3 kun / 2 tun',
          price: '$250 dan',
          img: 'https://images.unsplash.com/photo-1733586092622-1b3201e802a5?w=800&auto=format&fit=crop&q=80'
        },
        {
          name: 'Buxoro: Sharif shahar',
          desc: 'Eski shaharning qadimiy ko\'chalari bo\'ylab sayr qiling va Ark qal\'asini kashf eting.',
          duration: '2 kun / 1 tun',
          price: '$180 dan',
          img: 'https://images.unsplash.com/photo-1653023102302-247f5f0fbdd1?w=800&auto=format&fit=crop&q=80'
        },
        {
          name: 'Xiva: Ochiq osmon ostidagi muzey',
          desc: 'Ichan-Qal\'aning mukammal saqlanib qolgan ichki shahrida vaqtga sayohat qiling.',
          duration: '2 kun / 1 tun',
          price: '$220 dan',
          img: 'https://images.unsplash.com/photo-1728115214399-ad40d93eb935?w=800&auto=format&fit=crop&q=80'
        }
      ]
    }
  }
};

