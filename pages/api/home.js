export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        header: {
            logo: {
              desktop: ["Art", "Gallery"],
              mobile: ["A", "G"]
            },
            menu: {
              main: [
                {
                  name: "Каталог",
                  url: "/catalog"
                },
                {
                  name: "Художники",
                  url: ""
                },
                {
                  name: "Блог",
                  url: ""
                },
              ],
              secondary: {
                name: "Ещё",
                secondaryItems: [
                  {
                    name: "О проекте",
                    url: ""
                  },
                  {
                    name: "Доставка",
                    url: ""
                  },
                  {
                    name: "Политика конфиденциальности",
                    url: ""
                  },
                ]
              },
            },
            lang: {
              desktopStatic: {
                name: "RU"
              },
              desktopList: [
                {
                  name: "EN",
                  url: "/en"
                },
              ],
              mobile: {
                name: "Английская версия",
                url: "/en"
              }
            },
            copyright: {
              name: "© Artgallery, 2018"
            },
            account: {
              name: "Александрелло",
              url: ""
            }
            
          },
        slider: {
            sliders: [
                {
                    url: "/images/background-slide-1.jpg",
                    stringOne: "Новое на этой неделе1",
                    stringTwo: ["Лучшие фигуративные","произведения"],
                    stringThree: ["Новые оригинальные работы,","выбранные нашим эспертом"],
                    button: {
                        name: "Открыть",
                        url: ""
                    }
                },
                {
                    url: "/images/background-slide-1.jpg",
                    stringOne: "Новое на этой неделе2",
                    stringTwo: ["Лучшие фигуративные","произведения"],
                    stringThree: ["Новые оригинальные работы,","выбранные нашим эспертом"],
                    button: {
                        name: "Открыть",
                        url: ""
                    }
                },
                {
                    url: "/images/background-slide-1.jpg",
                    stringOne: "Новое на этой неделе3",
                    stringTwo: ["Лучшие фигуративные","произведения"],
                    stringThree: ["Новые оригинальные работы,","выбранные нашим эспертом"],
                    button: {
                        name: "Открыть",
                        url: ""
                    }
                },
            ]
        },
        beginner: {
            mainTitle: "Не знаете с чего начать?",
            video: {
                previewURL: "/images/background-video.jpg",
                previewText: "Видеобзор нашего ресурса возможности для пользователя",
                popup: {
                    videouURL: "https://www.youtube.com/embed/R8Yd-M9vfI0"
                }
            },
            article: {
                previewURL: "/images/expert-photo.jpg",
                title: "Выбор экспертов",
                description: "Обзор нашего экспетра Элеоноры Рубинштейн-Загорской"
            },
        },
        works: {
            mainTitle: "Новые работы",
            sortingCards: {
                title: "Сортировать по",
                sortList: [
                    {
                        name: "Дате добавления",
                        value: "value1"
                    },
                    {
                        name: "Цене",
                        value: "value2"
                    },
                    {
                        name: "Популярности",
                        value: "value3"
                    },
                ]
            },
            cards: [
                {
                    pictureURL: "/images/photo-works-1.jpg",
                    tag: "Новинка",
                    title: "Распоряжения о структуре тут длинное название картины",
                    cardURL: "/productCard",
                    author: "Екатерина Александровна Преображенская",
                    authorURL: "",
                    size: "Картина, 80x60 см.",
                    price: 927750,
                    oldPrice: 727750,
                    favorite: false,
                    basket: false
                },
                {
                    pictureURL: "/images/photo-works-2.jpg",
                    tag: "Новинка",
                    title: "Распоряжения о структуре тут длинное название картины",
                    cardURL: "/productCard",
                    author: "Екатерина Александровна Преображенская",
                    authorURL: "",
                    size: "Картина, 80x60 см.",
                    price: 927750,
                    oldPrice: 727750,
                    favorite: false,
                    basket: false
                },
                {
                    pictureURL: "/images/photo-works-3.jpg",
                    tag: "Новинка",
                    title: "Распоряжения о структуре тут длинное название картины",
                    cardURL: "/productCard",
                    author: "Екатерина Александровна Преображенская",
                    authorURL: "",
                    size: "Картина, 80x60 см.",
                    price: 927750,
                    oldPrice: 727750,
                    favorite: false,
                    basket: false
                },
                {
                    pictureURL: "/images/photo-works-4.jpg",
                    tag: "Новинка",
                    title: "Распоряжения о структуре тут длинное название картины",
                    cardURL: "/productCard",
                    author: "Екатерина Александровна Преображенская",
                    authorURL: "",
                    size: "Картина, 80x60 см.",
                    price: 927750,
                    oldPrice: 727750,
                    favorite: false,
                    basket: false
                },
                {
                    pictureURL: "/images/photo-works-5.jpg",
                    tag: "Новинка",
                    title: "Распоряжения о структуре тут длинное название картины",
                    cardURL: "/productCard",
                    author: "Екатерина Александровна Преображенская",
                    authorURL: "",
                    size: "Картина, 80x60 см.",
                    price: 927750,
                    oldPrice: 727750,
                    favorite: false,
                    basket: false
                },
                {
                    pictureURL: "/images/photo-works-6.jpg",
                    tag: "Новинка",
                    title: "Распоряжения о структуре тут длинное название картины",
                    cardURL: "/productCard",
                    author: "Екатерина Александровна Преображенская",
                    authorURL: "",
                    size: "Картина, 80x60 см.",
                    price: 927750,
                    oldPrice: 727750,
                    favorite: false,
                    basket: false
                },
                {
                    pictureURL: "/images/photo-works-7.jpg",
                    tag: "Новинка",
                    title: "Распоряжения о структуре тут длинное название картины",
                    cardURL: "/productCard",
                    author: "Екатерина Александровна Преображенская",
                    authorURL: "",
                    size: "Картина, 80x60 см.",
                    price: 927750,
                    oldPrice: 727750,
                    favorite: false,
                    basket: false
                },
                {
                    pictureURL: "/images/photo-works-8.jpg",
                    tag: "Новинка",
                    title: "Распоряжения о структуре тут длинное название картины",
                    cardURL: "/productCard",
                    author: "Екатерина Александровна Преображенская",
                    authorURL: "",
                    size: "Картина, 80x60 см.",
                    price: 927750,
                    oldPrice: 727750,
                    favorite: false,
                    basket: false
                },
                {
                    pictureURL: "/images/photo-works-9.jpg",
                    tag: "Новинка",
                    title: "Распоряжения о структуре тут длинное название картины",
                    cardURL: "/productCard",
                    author: "Екатерина Александровна Преображенская",
                    authorURL: "",
                    size: "Картина, 80x60 см.",
                    price: 927750,
                    oldPrice: 727750,
                    favorite: false,
                    basket: false
                },
                
            ]
        },
        styles: {
            mainTiitle: "Обзор стилей",
            slides: {
                slideOne: {
                    stylesListOne: ["Современное НЮ", "Новое изобразительное искусство"],
                    stylesListTwo: {
                        stylesListTwo_1: [
                            {
                                string1: "Вдохновение",
                                string2: "Уорхолом"
                            }, "Новый Поп Арт"],
                        stylesListTwo_2: [
                            {
                                string1: "Вдохновение",
                                string2: "Гансом Хофманном"
                            }, "Новый абстрактный экспрессионизм"],
                    }
                },
                slideTwo: {
                    stylesListOne: ["Современное НЮ", "Новое изобразительное искусство"],
                    stylesListTwo: {
                        stylesListTwo_1: [
                            {
                                string1: "Вдохновение",
                                string2: "Уорхолом"
                            }, "Новый Поп Арт"],
                        stylesListTwo_2: [
                            {
                                string1: "Вдохновение",
                                string2: "Гансом Хофманном"
                            }, "Новый абстрактный экспрессионизм"],
                    }
                }
            }
        },
        news: {
            mainTitle: "Новости искусства",
            newsItems: [
                {
                    pictureURL: "/images/news-photo-1.jpg",
                    tag: "Галлереи и выставки",
                    date: "21.12.2018",
                    newsURL: "",
                    title: "Обзор нашего экспетра Владимира Рубинштейна-Загорского",
                    description: "Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир."
                },
                {
                    pictureURL: "/images/news-photo-2.jpg",
                    tag: "Галлереи и выставки",
                    date: "21.12.2018",
                    newsURL: "",
                    title: "Обзор нашего экспетра Владимира Рубинштейна-Загорского",
                    description: "Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир."
                },
            ]
        },
        footer: {
            aboutArtGallery: {
                title: "Об ArtGallery",
                elements: [
                    {
                        name: "О проекте",
                        url: ""
        
                    },
                    {
                        name: "Блог",
                        url: ""
                    },
                    {
                        name: "Авторы",
                        url: ""
                    }
                ]
            },
            buyers: {
                title: "Покупателям",
                elements: [
                    {
                        name: "Доставка",
                        url: ""
        
                    },
                    {
                        name: "Оплата",
                        url: ""
                    },
                    {
                        name: "Возврат",
                        url: ""
                    }
                ]
            },
            catalog: {
                title: "Каталог",
                elements: [
                    {
                        name: "Картины",
                        url: ""
        
                    },
                    {
                        name: "Коллажи",
                        url: ""
                    },
                    {
                        name: "Иллюстрации",
                        url: ""
                    }
                ]
            },
            contact: {
                title: "Контакты",
                tel: "+ 7 (999) 123-123-44",
                mail: "info@domainname.ru",
                address: ["г. Москва", "Преснесенская наб., 12"]
            },
            socialNetwork: {
                title: "Мы в социальных сетях"
            },
            paymentsSystems: {
                title: "Платёжные системы",
                paymentsURL: "/images/payments-systems.png"
            },
            documents: [
                {
                    name: "Политика конфендициальности",
                    url: ""
                },
                {
                    name: "Условия и положения",
                    url: ""
                }
            ],
            copyright: "© Artgallery, 2018"
        },
        popupAuthorization: {
            mainTitle: "Авторизация"
        },
        popupRegistration: {
            mainTitle: "Регистрация"
        },
        popupSuccess: {
            mainTitle: "Успех!"
        },
        popupPasswordRecovery: {
            mainTitle: "Восстановить пароль"
        }
    }))
  }