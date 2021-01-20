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
        productCard: {
            title: "Распоряжение о структуре очень длинное название картины",
            author: "Диана Миллер",
            picture: [
                {
                    url: "/images/product-1.jpg"
                },
                {
                    url: "/images/styles-photo-4.jpg"
                },
                {
                    url: "/images/styles-photo-3.jpg"
                },
            ],
            article: "Арт. HWV-133423",
            size: "100 x 120 x 4 см",
            style: "Пейзаж",
            price: 927750,
            oldPrice: 727750,
            parametrsPicture: [
                {
                    name: "Год написания",
                    description: "2008"
                },
                {
                    name: "Тема",
                    description: "Океан, Берег, Пляж"
                },
                {
                    name: "Стиль",
                    description: "Современный пейзаж"
                },
                {
                    name: "Материалы",
                    description: "Уголь, Чернила, Пастель"
                },
            ],
            descriptionPicure: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla eius doloribus distinctio reprehenderit, rerum suscipit pariatur, iste quo, voluptatum sequi aut similique ad ab. Quasi tempora laboriosam possimus temporibus!",
        },
        worksCard: {
            mainTitle: "Похожие работы",
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