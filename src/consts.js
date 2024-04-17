export const months = [
  "январе",
  "феврале",
  "марте",
  "апреле",
  "мае",
  "июне",
  "июле",
  "августе",
  "сентябре",
  "октябре",
  "ноябре",
  "декабре"
];




export const contacts = [
  {
    phone: '+7 (383) 383-20-89',
    address: 'г. Новосибирск, ул. Владимировская 29А'
  },
  // {
  //   phone: '+7 (383) 383-20-89',
  //   address: 'г. Новосибирск, ул. Владимировская 29А'
  // },
]

export const mainTitle = {
  text: 'Выгода на CHERY',
  profit: 1088100,
  infoModal: {
    status: true,
    title: 'Modal title',
    text: `Кредит от 0,01% до 84 мес.Финансовые услуги оказывает ПАО РОСБАНК, генеральная лицензия №2272 от 28.01.15. Первоначальный взнос от 20%. Срок кредита 36 мес. с пролонгацией до 84 мес. Обязательно оформление опции банка «Назначь свою ставку» стоимостью от 9,5% до 15,5% от суммы кредита. Опция оплачивается единовременно при заключении кредитного договора путем включения в сумму кредита. Отказ от опции не предусмотрен. Не оферта. подробности на chery.ru`
  },
  description: 'Узнайте реальную стоимость CHERY от официального дилера',
}

export const advantages = {
  colorBg: '#1d1d1d',
  textColor: '#ffffff',
  items: [
    {
      text: 'CHERY&nbsp;в&nbsp;EXPOCAR от&nbsp;1&nbsp;535&nbsp;500&nbsp;₽',
      icon: '/icons/protect.svg'
    },
    {
      text: 'Гарантия до&nbsp;7&nbsp;лет&nbsp;/ 200&nbsp;000&nbsp;км',
      icon: '/icons/protect.svg'
    },
    {
      text: '15&nbsp;минут на&nbsp;одобрение заявки по&nbsp;кредиту',
      icon: '/icons/protect.svg'
    }
  ]
};

export const botInfo = {
  name: 'Ольга',
  description: 'Онлайн-консультант автосалона Чери Центр ЭМ Восток на Владимировской',
  text: '<p>Здравствуйте!</p><p>Напишите свой номер, и я расскажу обо всех спецпредложениях на а/м Чери Центр ЭМ Восток на Владимировской</p>'
}

export const botMessages = [
  {
    step: 1,
    messages: [
      'Здравствуйте!<br>Меня зовут Ольга. Я онлайн-консультант официального автосалона CHERY',
      'Пожалуйста, ответьте на пару вопросов - я составлю для вас предложение с вариантами комплектации и стоимостью.',
      'Какую модель автомобиля вы рассматриваете?'
    ],
    materials: false
  },
  {
    step: 2,
    messages: [
      'Выберите автомобиль из списка выше'
    ],
    materials: `cars`
  },
]

export const cars = [
  {
    brand: 'Chery',
    model: 'Tiggo 4 Pro 18 years edition',
    profit: '615000',
    image: 'tiggo4pro.png'
  },
  {
    brand: 'Chery',
    model: 'ARRIZO 8',
    profit: '990000',
    image: 'arrizo.png'
  },
  {
    brand: 'Chery',
    model: 'Tiggo 7 Pro Max',
    profit: '707150',
    image: 'Tiggo7PROmax.png'
  },
  {
    brand: 'Chery',
    model: 'Tiggo 7 Pro Max AWD',
    profit: '793000',
    image: '7proMax.png'
  },
  {
    brand: 'Chery',
    model: 'Tiggo 8 New',
    profit: '620500',
    image: 'Tiggo8NEW.png'
  },
  {
    brand: 'Chery',
    model: 'Tiggo 8 Pro Max',
    profit: '1088100',
    image: 'tiggo8awd.png'
  },
]