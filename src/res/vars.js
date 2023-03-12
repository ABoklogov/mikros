export const prodUrl = 'https://xn--h1aeekjh.xn--p1ai/dev/api/';
export const baseUrl = 'http://mobile-api.dev.mikros-vrn.ru/api';
export const baseUrlImg = 'http://dev.mikros-vrn.ru';
export const keyCity = '6349ab7250f3cb4baa71145d50bd84cb21dfcd7a';
export const cityUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';

export const fonts = {
  black: 'GothamPro-Black',
  bold: 'GothamPro-Bold',
  medium: 'GothamPro-Medium',
  light: 'GothamPro-Light',
};

export const sizeText = {
  big: 22,
  medium: 17,
  normal: 15,
  light: 13,
  mini: 11,
  micro: 10,
};

export const heightText = {
  big: 22,
  medium: 17,
  normal: 16,
  light: 13,
  mini: 11,
  micro: 10,
};

export const colors = {
  black: '#000c0c',
  lightBlack: '#1B2121',
  white: '#ffffff',
  transparent: 'rgba(255, 255, 255, 0.3)',
  transparentGrey: 'rgba(221, 221, 221, 0.3)',
  backdrop: 'rgba(0, 0, 0, .3)',

  darkGrey: '#5C5C5C',
  grey: '#A8A8A8',
  lightGrey: '#DDDDDD',
  borderColor: '#F5F5F5',

  green: '#9cc330',
  blue: '#3A91CE',
  lightBlue: '#ecf7fe',
  red: '#DE2728',

  backgroundGrey: '#F9F9F9',
};

export const radius = {
  card: 7,
  input: 10,
  button: 10,
  block: 16,
};

export const mHorizontal = {
  baseBlock: 15,
};

export const strings = {
  //--- имена экранов ---
  // - главные - (1 уровень)
  nameMainScreens: {
    home: 'Главная',
    catalog: 'Каталог',
    favorite: 'Избранное',
    basket: 'Корзина',
    profile: 'Профиль',
  },
  // главная (2 уровень)
  nameNestedHome: {
    homeBannersProducts: 'Список товаров с баннера',
    homeBannersCardProduct: 'Карточка товара с баннера',
    homeHolidaysProducts: 'Список праздничных товаров',
    homeHolidaysCardProduct: 'Карточка праздничного товара',
    homeSaleProducts: 'Список акционных товаров',
    homeSaleCardProduct: 'Карточка акционного товара',
  },
  // каталог (2 уровень)
  nameNestedCatalog: {
    categorys: 'Список категорий',
    // subCategorys: 'Список подкатегорий',
    products: 'Список товаров',
    cardProduct: 'Карточка товара',
  },
  // корзина (2 уровень)
  nameNestedBasket: {
    home: 'Моя корзина',
    ordering: 'Оформление заказа',
    processing: 'Обработка заказа',
  },
  // пофиль (2 уровень)
  nameNestedProfile: {
    home: 'Личный кабинет',
    profileInfo: 'Мои данные',
    orderHistory: 'История заказов',
    payment: 'Оплата без заказа',
    subscription: 'Подписка',
  },
  // экраны без нижних табов
  nameNotTabs: {
    logIn: 'Вход',
    registration: 'Регистрация',
    barcodeScan: 'Сканер штри-кода',
  },

  textLinkLogIn: 'Нет аккаунта? Зарегистрироваться',
  textLinkRegistration: 'Уже есть аккаунт? Войти',
  textAuth: 'Войдите или зарегистрируйтесь, чтобы получить полный доступ к функциям Микрос',
  textBtnReturnScan: 'Сканировать еще раз',
  textBtnOpenScan: 'открыть сканер',
  // textNotProductScan: 'Товар не найден',

  // плейсхолдеры
  placeholders: {
    search: 'Я ищу...',
    // вход
    email: 'Введите почту:',
    password: 'Введите пароль:',
    // регистрация
    higherEmail: 'Ваша почта:',
    inventionPassword: 'Придумайте пароль:',
    repeatPassword: 'Подтвертите пароль:',
    name: 'Ваше имя/организация:',
    city: 'Ваш город:',
    phone: 'Ваш телефон:',
  },

  // алерты инпутов
  alertInputs: {
    name: {
      title: 'Имя/организация',
      text: 'Имя или название организации может содержать любые символы и должно быть больше 2 символов',
    },
    city: {
      title: 'Город',
      text: 'Может содержать буквы и цифры (латиница + кириллица)',
    },
    phone: {
      title: 'Телефон',
      text: 'Формат телефона: +7 (999) 999 99 99, не менее 7 цифр',
    },
    email: {
      title: 'Электронная почта',
      text: 'Формат почты - mikros@mail.ru',
    },
    password: {
      title: 'Пароль',
      text: 'Пароль должен содержать минимум 6 символов.',
    },
  },

  profileText: {
    favorite: 'Добавляйте сюда товары, которые вам понравились, чтобы не забыть купить их',
    basket: 'Ваша корзина пуста',
    orderHistory: 'У вас еще нет заказов',
  },

  titles: {
    titleSaleProducts: 'Акционные товары',
  },


};

export const images = {
  categorys: {
    10364: require(`assets/images/categorys_icon/holidays.png`), //праздники -
    11459: require(`assets/images/categorys_icon/poligrafy.png`), //полиграфия -
    10654: require(`assets/images/categorys_icon/balloons.png`), //воздушные шары -
    10575: require(`assets/images/categorys_icon/candles.png`), //свечи -
    10589: require(`assets/images/categorys_icon/packaging.png`), //Упаковка подарочная -
    10583: require(`assets/images/categorys_icon/suvenirs.png`), //Сувениры -
    10612: require(`assets/images/categorys_icon/floristics.png`), //Флористика -
    10243: require(`assets/images/categorys_icon/for-holiday.png`), //Для праздника -
    11242: require(`assets/images/categorys_icon/toys.png`), //Игрушки -
    10767: require(`assets/images/categorys_icon/art.png`), //Товары для творчества -
    10870: require(`assets/images/categorys_icon/school.png`), //Школа, детский сад
    10682: require(`assets/images/categorys_icon/sale.png`), //РАСПРОДАЖА -
    10867: require(`assets/images/categorys_icon/summer.png`), //Летние товары
    10752: require(`assets/images/categorys_icon/helium.png`), //Гелий -
    10753: require(`assets/images/categorys_icon/print.png`), //Печать на шарах - 
    11791: require(`assets/images/categorys_icon/brands.png`), //Бренды -
    12759: require(`assets/images/categorys_icon/plush.png`), //Мягкие игрушки -
    11768: require(`assets/images/categorys_icon/mask.png`), //Средства защиты -
    11773: require(`assets/images/categorys_icon/tourism.png`), //Отдых и туризм -
    12772: require(`assets/images/categorys_icon/diplom.png`), //Наградная атрибутика -
    12790: require(`assets/images/categorys_icon/wait.png`), //Ожидаемый товар -
    12809: require(`assets/images/categorys_icon/license.png`), //Лицензия -
  },
  holidays: {
    10792: require(`assets/images/holidays_icon/confetti.png`), //День Рождения
    10202: require(`assets/images/holidays_icon/wedding.png`), //Свадьба
    10565: require(`assets/images/holidays_icon/newborn.png`), //С новорожденными
    10990: require(`assets/images/holidays_icon/football.png`), //Чемпионат по футболу
    10553: require(`assets/images/holidays_icon/easter.png`), //Пасха
    10438: require(`assets/images/holidays_icon/star.png`), //9 мая
    11007: require(`assets/images/holidays_icon/russia.png`), //День России
    10444: require(`assets/images/holidays_icon/notification.png`), //Выпускной
    11050: require(`assets/images/holidays_icon/bukvar.png`), //День Букваря
    10365: require(`assets/images/holidays_icon/1september.png`), //1 сентября
    11008: require(`assets/images/holidays_icon/city.png`), //День города
    11002: require(`assets/images/holidays_icon/autumn.png`), //Праздник осени
    11009: require(`assets/images/holidays_icon/globe.png`), //День Учителя
    11010: require(`assets/images/holidays_icon/pumpkin.png`), //Хэллоуин
    10486: require(`assets/images/holidays_icon/christmas-tree.png`), //Новый год
    10453: require(`assets/images/holidays_icon/balloon.png`), //День Святого Валентина
    10376: require(`assets/images/holidays_icon/tank.png`), //23 февраля
    10396: require(`assets/images/holidays_icon/flower.png`), //8 марта
    12757: require(`assets/images/holidays_icon/sun.png`), //Летний ассортимент
  }
};