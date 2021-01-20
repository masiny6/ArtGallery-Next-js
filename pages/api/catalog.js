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
        titleCatalog: {
            mainTitle: "Каталог картин",
            backgroundURL: "/images/title-catalog.jpg"
        },
        filter: {
            author: {
                title: "Автор",
                // elementsSelect: {
                //     A: ["Абулафия Крайнова", "Арменинов Тринедул", "Ассадулин Нефёдов", "Ашихмин Шадурахов"],
                //     B: ["Бабурин Константин", "Бабуркин Вениамин", "Балутин Перламутр", "Бенвенист Трамп", "Бердюгин Битюг"]
                // },
                elementsSelect: {
                    A: [{value: "Абулафия Крайнова", label: "Абулафия Крайнова"}, {value: "Арменинов Тринедул", label: "Арменинов Тринедул"}, {value: "Ассадулин Нефёдов", label: "Ассадулин Нефёдов"}, {value: "Ашихмин Шадурахов", label: "Ашихмин Шадурахов"}],
                    B: [{value: "Бабурин Константин", label: "Бабурин Константин"}, {value: "Бабуркин Вениамин", label: "Бабуркин Вениамин"}, {value: "Балутин Перламутр", label: "Балутин Перламутр"}, {value: "Бенвенист Трамп"}, {value: "Бердюгин Битюг", label: "Бердюгин Битюг"}]
                }
            },
            genre: {
                title: "Жанр",
                elements: ["Вортицизм", "Модернизм", "Авангардизм", "Реализм", "Барокко", "Конструктивизм", "Готика", "Классицизм", "Поп-арт", "Натюрморт"]
            },
            color: {
                title: "Цвет",
                elements: ["Красный", "Белый", "Синий", "Чёрный"]
            },
            topic: {
                title: "Тема",
                elements: ["Вортицизм", "Модернизм", "Авангардизм", "Реализм", "Барокко", "Готика", "Классицизм", "Поп-арт", "Натюрморт"]
            },
            material: {
                title: "Материал",
                elements: ["Сукно", "Брезент", "Синтипон", "Велдшнепт"]
            },
            style: {
                title: "Стиль",
                elements: ["Вортицизм", "Модернизм", "Авангардизм", "Реализм", "Барокко", "Конструктивизм", "Готика", "Классицизм", "Натюрморт"]
            }
        },
        popularFilter: {
            mainTitle: "Популярные фильтры",
            elements: [
                {
                    name: "Барроко",
                    pictureURL: "/images/popular-filter-1.jpg"
                },
                {
                    name: "Живопись",
                    pictureURL: "/images/popular-filter-2.jpg"
                },
                {
                    name: "Пейзаж",
                    pictureURL: "/images/popular-filter-3.jpg"
                },
                {
                    name: "Модерн",
                    pictureURL: "/images/popular-filter-4.jpg"
                },
                {
                    name: "Барроко",
                    pictureURL: "/images/popular-filter-2.jpg"
                },
            ]
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