import { axios } from "./default-axios.api";

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const interfaceSettingsInServer = [
  //images
  {
    key: "bigSliderImages",
    value: JSON.stringify(["https://images.unsplash.com/photo-1565895405227-31cffbe0cf86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1565895405137-3ca0cc5088c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
      "https://images.unsplash.com/photo-1560863223-91879da9cdce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",]),
  },
  {
    key: "headerImage",
    value: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    key: "footerScheduleBgImage",
    value: "https://images.unsplash.com/photo-1649698473251-4ecf98fc804e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },

  {
    key: "footerBgImage",
    value: "https://images.unsplash.com/photo-1649698473251-4ecf98fc804e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },

  {
    key: "footerScheduleBgColor",
    value: "rgba(122, 40, 85, 0.9)",
  },
  // {
  //   key: "newsSliderBgColor",
  //   value: "rgba(122, 40, 85, 0.9)",
  // },

  {
    key: "newsSliderBgImage",
    value: "https://images.unsplash.com/photo-1649698473251-4ecf98fc804e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    key: "galleryImages",
    value: JSON.stringify([
      "/photos/home_page/home_gallery/главная страница фото зала.jpg",
      "/photos/home_page/home_gallery/главная страница фото зала2.jpg",
      "/photos/home_page/home_gallery/ок3.jpg",
      "/photos/home_page/home_gallery/DSC_9850.jpg",
      "/photos/home_page/home_gallery/DSC_9861.jpg",
      "/photos/home_page/home_gallery/DSC_9866.jpg",
      // "/photos/home_page/home_gallery/DSC_9872.jpg",
      // "/photos/home_page/home_gallery/DSC_9880.jpg",
      // "/photos/home_page/home_gallery/DSC_9889.jpg",
      // "/photos/home_page/home_gallery/DSC_9906.jpg",
      // "/photos/home_page/home_gallery/DSC_9908.jpg",
      // "/photos/home_page/home_gallery/DSC_9910.jpg",
      // "/photos/home_page/home_gallery/DSC_9923.jpg",
      // "/photos/home_page/home_gallery/DSC_9925.jpg",
      // "/photos/home_page/home_gallery/IMG_2778.jpg",
      // "/photos/home_page/home_gallery/IMG_2789.jpg",
      // "/photos/home_page/home_gallery/IMG_2847.jpg",
    ]),
  },
  {
    key: "banquetsGalleryImages",
    value: JSON.stringify([
      "/photos/banquets_page/banquets_gallery/банкеты_бистро1.jpg",
      "/photos/banquets_page/banquets_gallery/банкеты_бистро3.jpg",
      "/photos/banquets_page/banquets_gallery/банкеты_бистро4.jpg",
      // "/photos/banquets_page/banquets_gallery/банкеты_страница.jpg",
      "/photos/banquets_page/banquets_gallery/страница_банкеты_3.jpg",
       "/photos/banquets_page/banquets_gallery/страница_банкеты_фото_блюд.jpg",
      // "/photos/banquets_page/banquets_gallery/страница_банкеты.jpg",
      // "/photos/banquets_page/banquets_gallery/страница_банкеты2.jpg",
    ]),
  },
  {
    key: "bistroInfoBgImage",
    value: "https://images.unsplash.com/photo-1649698473251-4ecf98fc804e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },

  //some bistro info
  {
    key: "city",
    value: 'Гродно',
  },
  {
    key: "phone",
    value: '+375292445349',
  },
  // {
  //   key: "socialLinks",
  //   value: `{
  //     "instagramLink":"https://www.instagram.com/bistro_bufet",
  //     "viberLink":"https://www.google.com/search?q=%D0%BE%D0%B1%D0%B5%D0%B4-%D0%B1%D1%83%D1%84%D0%B5%D1%82+%D0%B3%D1%80%D0%BE%D0%B4%D0%BD%D0%BE&rlz=1C1ZKTG_ruBY977BY978&sxsrf=APq-WBt4H6YzfhU3wQXZbqjjbZAvWhsAzg:1649687647607&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj-heexnYz3AhXplIsKHQx4COgQ_AUoAnoECAEQBA&cshid=1649687688674295&biw=1536&bih=792&dpr=1.25#imgrc=cZwf6ntv7UP5WM",
  //     "googleLink":"https://www.google.com/search?q=%D0%BE%D0%B1%D0%B5%D0%B4-%D0%B1%D1%83%D1%84%D0%B5%D1%82+%D0%B3%D1%80%D0%BE%D0%B4%D0%BD%D0%BE&rlz=1C1ZKTG_ruBY977BY978&sxsrf=APq-WBuIvR_MdVOwttTiVvKMuFehAanROQ%3A1649687641495&ei=WTxUYtbvHZaRrwSi8pywAQ&oq=%D0%BE%D0%B1%D0%B5%D0%B4-%D0%B1%D1%83%D1%84%D0%B5%D1%82+uhjlyj&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCCMQsAIQJzIKCC4QxwEQrwEQDTIICAAQDRAFEB46DQguEMcBEK8BELADECc6BwgAEEcQsAM6CgguEMcBEK8BECc6BAgAEB46BggAEA0QHjoICAAQCBANEB5KBAhBGABKBAhGGABQ-gVYohJg3R5oAXABeACAAXmIAcsFkgEDMy40mAEAoAEByAEJwAEB&sclient=gws-wiz"
  //   }`,
  // },
  {
    key: "instagramLink",
    value: 'https://www.instagram.com/bistro_bufet',
  },
  {
    key: "viberLink",
    value: 'https://www.google.com/search?q=%D0%BE%D0%B1%D0%B5%D0%B4-%D0%B1%D1%83%D1%84%D0%B5%D1%82+%D0%B3%D1%80%D0%BE%D0%B4%D0%BD%D0%BE&rlz=1C1ZKTG_ruBY977BY978&sxsrf=APq-WBt4H6YzfhU3wQXZbqjjbZAvWhsAzg:1649687647607&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj-heexnYz3AhXplIsKHQx4COgQ_AUoAnoECAEQBA&cshid=1649687688674295&biw=1536&bih=792&dpr=1.25#imgrc=cZwf6ntv7UP5WM',
  },
  {
    key: "googleLink",
    value: 'https://www.google.com/search?q=%D0%BE%D0%B1%D0%B5%D0%B4-%D0%B1%D1%83%D1%84%D0%B5%D1%82+%D0%B3%D1%80%D0%BE%D0%B4%D0%BD%D0%BE&rlz=1C1ZKTG_ruBY977BY978&sxsrf=APq-WBuIvR_MdVOwttTiVvKMuFehAanROQ%3A1649687641495&ei=WTxUYtbvHZaRrwSi8pywAQ&oq=%D0%BE%D0%B1%D0%B5%D0%B4-%D0%B1%D1%83%D1%84%D0%B5%D1%82+uhjlyj&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCCMQsAIQJzIKCC4QxwEQrwEQDTIICAAQDRAFEB46DQguEMcBEK8BELADECc6BwgAEEcQsAM6CgguEMcBEK8BECc6BAgAEB46BggAEA0QHjoICAAQCBANEB5KBAhBGABKBAhGGABQ-gVYohJg3R5oAXABeACAAXmIAcsFkgEDMy40mAEAoAEByAEJwAEB&sclient=gws-wiz',
  },

  {
    key: "address",
    value: 'Ждем вас на Мясницкой, 12А',
  },
  {
    key: "email",
    value: 'marketing.atlantik@gmail.com',
  },
  {
    key: "mapIframe",
    value: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.3855960276493!2d23.820150039852084!3d53.71808158068156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e07f264b2889d7%3A0xc60c76be50e65222!2z0JHQuNGB0YLRgNC-INCe0LHQtdC0LdCR0YPRhNC10YI!5e1!3m2!1sru!2sby!4v1648539695702!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    key: "schedule",
    value: '[{"day":"Понедельник","hours":"12.30 – 18.00","additional":""},{"day":"Вторник","hours":"12.30 – 18.00","additional":""},{"day":"Среда","hours":"12.30 – 18.00","additional":""},{"day":"Четверг","hours":"12.30 – 18.00","additional":""},{"day":"Пятница","hours":"12.30 – 18.00","additional":""},{"day":"Суббота","hours":"выходной","additional":""},{"day":"Воскресенье","hours":"выходной","additional":"При заказе банкета в будний день, ресторан работает до 00.00"}]',
  },

  // titles and subtitles
  {
    key: "siteTitle",
    value: "Бистро «Обед-буфет»",
  },
  {
    key: "dishSliderTitle",
    value: "Меню на сегодня",
  },
  {
    key: "dishSliderSubtitle",
    value: "Популярные блюда",
  },
  {
    key: "bistroInfoTitle",
    value: '«Обед-Буфет»',
  },
  {
    key: "bistroInfoSubtitle",
    value: 'Бистро',
  },
  {
    key: "galleryTitle",
    value: 'Фото зала',
  },
  {
    key: "gallerySubtitle",
    value: 'Галерея',
  },
  {
    key: "galleryBanquetsTitle",
    value: 'Фото зала',
  },
  {
    key: "galleryBanquetsSubtitle",
    value: 'Место, где кухня и гостеприимство сливаются в единое целое',
  },
  {
    key: "footerTitle",
    value: 'Контактная информация',
  },


  // texts
  {
    key: "bistroInfoText",
    value: `<p>Бистро «Обед-буфет» - это место, где вас всегда встретят с теплой улыбкой и угостят по-домашнему вкусными блюдами.</p>
    <p>Уютный зал до 80 человек</p>
    <p>По-домашнему вкусная еда</p>
    <p>Доступные цены</p>`,
  },
  {
    key: "footerText",
    value: `Связаться с директором, чтобы оставить свои пожелания и замечания, можно по электронной почте, указанной ниже.`,
  },
  {
    key: "aboutAs",
    value: `Все наши блюда доведены до вкуса, можно сказать, что мы предлагаем домашнюю кухню, ориентируемся на подобный формат польских и литовских кафе-бистро. Нашей отличительной особенностью является свежая выпечка собственного приготовления. Постоянно на связи со своими посетителями - прислушиваемся к их мнению и учитываем пожелания при приготовлении блюд и составлении меню.
     Помимо своей основной функции - кормить обедами - кафе на выходных обслуживает корпоративы и банкеты. К слову, интерьер вовсе не напоминает столовую - вполне современный, в минималистичном исполнении, готовый к расстановке мебели и оформлению под любое мероприятие, рассчитанное на 80 гостей. Кухня по таким поводам полностью закрывается от банкетного зала. Уже сейчас открыта запись на свадебный сезон 2022 года.`,
  },
]

export const getAllInterfaceSettings = async () => {
  // const response = axios...
  const response = interfaceSettingsInServer;

  const stateFromResponse = response.reduce((state, item) => {
    IsJsonString(item.value)
      ? state[item.key] = JSON.parse(item.value)
      : state[item.key] = item.value;
    return state;
  }, {});
  return stateFromResponse;
}

export const updateInterfaceSettings = async (key, value, token) => {
  // const stringToPatch = JSON.stringify(value);
  // PATCH
  // fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //   method: 'PATCH',
  //   body: JSON.stringify({ // можа stringify не патрабна
  //     [key]: stringToPatch,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // });
  interfaceSettingsInServer.find(el => el.key === key).value = value;
}

// addition files
// value - file[]
export const updateInterfaceSettingsWithImages = async (key, value, token) => {
  interfaceSettingsInServer.find(el => el.key === key).value = value;
}

// value - file
export const updateInterfaceSettingsWithImage = async (key, value, token) => {
  interfaceSettingsInServer.find(el => el.key === key).value = value;
}






