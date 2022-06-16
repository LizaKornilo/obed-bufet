const splashImage = "https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
const splashImage2 = "https://images.unsplash.com/photo-1478583888903-ed8b1b964b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";

const initialState = {
  bigSliderImages: [
    "https://images.unsplash.com/photo-1565895405227-31cffbe0cf86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1565895405137-3ca0cc5088c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
    "https://images.unsplash.com/photo-1560863223-91879da9cdce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ],
  headerImage: splashImage,
  footerScheduleBgImage: splashImage2,
  footerScheduleBgColor: "rgba(122, 40, 85, 0.9)",
  footerBgImage: splashImage2,
  newsSliderBgColor: "rgba(122, 40, 85, 0.9)",
  newsSliderBgImage: splashImage2,
  galleryImages: [
    "/photos/banquets_page/banquets_gallery/страница_банкеты_3.jpg",
    "/photos/banquets_page/banquets_gallery/страница_банкеты_фото_блюд.jpg",
    "/photos/home_page/home_gallery/ок3.jpg",
    "/photos/home_page/home_gallery/DSC_9850.jpg",
    "/photos/home_page/home_gallery/DSC_9861.jpg",
    "/photos/home_page/home_gallery/DSC_9866.jpg",
  ],
  banquetsGalleryImages: [
    "/photos/banquets_page/banquets_gallery/банкеты_бистро1.jpg",
    "/photos/banquets_page/banquets_gallery/банкеты_бистро3.jpg",
    "/photos/banquets_page/banquets_gallery/банкеты_бистро4.jpg",
    "/photos/banquets_page/banquets_gallery/страница_банкеты_3.jpg",
    "/photos/banquets_page/banquets_gallery/страница_банкеты_фото_блюд.jpg",
  ],
  bistroInfoBgImage: splashImage,

  city: "Xxxxxx",
  phone: "+375 (xx) xxx-xx-xx",
  // socialLinks: {

  // },
  instagramLink: 'https://www.google.by',
  viberLink: 'https://www.google.by',
  googleLink: 'https://www.google.by',
  address: "г. Xxxxxx, ул. Xxxxxxxx, xx",
  email: "xxxxxx@gmail.com",
  mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.3855960276493!2d23.820150039852084!3d53.71808158068156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e07f264b2889d7%3A0xc60c76be50e65222!2z0JHQuNGB0YLRgNC-INCe0LHQtdC0LdCR0YPRhNC10YI!5e1!3m2!1sru!2sby!4v1648539695702!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
  
  schedule: [
    {
      day: "Понедельник",
      hours: "12.30 – 18.00",
      additional: "",
    },
    {
      day: "Вторник",
      hours: "12.30 – 18.00",
      additional: "",
    },
    {
      day: "Среда",
      hours: "12.30 – 18.00",
      additional: "",
    },
    {
      day: "Четверг",
      hours: "12.30 – 18.00",
      additional: "",
    },
    {
      day: "Пятница",
      hours: "12.30 – 18.00",
      additional: "",
    },
    {
      day: "Суббота",
      hours: "выходной",
      additional: "",
    },
    {
      day: "Воскресенье",
      hours: "Выходной",
      additional: "",
    },
  ],

  siteTitle: "Site title",
  dishSliderTitle: "Dish slider title",
  dishSliderSubtitle: "Dish slider subitle",
  bistroInfoTitle: "Bistro info title",
  bistroInfoSubtitle: "Bistro info subtitle",
  galleryTitle: "Gallery title",
  gallerySubtitle: "Gallery subtitle",
  galleryBanquetsTitle: "Gallery banquets title",
  galleryBanquetsSubtitle: "Gallery banquets subtitle",
  footerTitle: "Footer title",

  bistroInfoText: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  footerText: "(Необязательный текст) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  aboutAs: `(Текст "о нас") Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,

  error: null,
}

export const interfaceSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INTERFACE_SETTINGS':
      return { ...state, ...action.payload };
    case 'FETCH_INTERFACE_SETTINGS_ERROR':
      return { ...state, error: action.payload };
    case 'EDIT_INTERFACE_SETTINGS':
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};