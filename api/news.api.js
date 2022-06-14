import { axios } from "./default-axios.api";

const splashImage = "https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const allNews = [{
  id: 1,
  imageRef: "https://telenok.by/d/salt_cezar_s_kurinoj_grudkoj.jpg",
  title: "Доставка ланчей по будням!",
  subtitle: null,
  description: `Друзья, напоминаем, что у нас вы можете заказать ланчи и другие позиции с доставкой на дом или в офис.
  Ежедневно новое обеденное меню. Достаточный выбор блюд.
  Доставка по Гродно от 100 р осуществляется бесплатно.
  При сумме заказа до 50р - стоимость доставки 8р
  При сумме заказа от 50р - 4р
  Стоимость доставки в отдаленные районы (Зарица, Ольшанка) - 12р
  Будем рады накормить вас  в ваши трудовые будни.
  Заказы принимаем по телефону +375 29 838 23 45 (вабйер, телеграм)`,
},
{
  id: 2,
  imageRef: "https://telenok.by/d/myasnoj_set_samyj_bolshoj.jpg",
  title: "Мясной четверг продолжается!",
  subtitle: "Мы обновили мясной четверг!",
  description: `Друзья, теперь в ресторане вас ждет более яркий обновленный  "Мясной четверг"!
  Забронировать столик можно любым удобным способом - по телефону +375 29 838 23 45 или же в нашем инстаграм-аккаунте @zolotoj_telenok.
  Сеты также можно заказать на доставку:
  четверг, пятница и суббота с 18.00 до 22.00.`,
},
  // {
  //   id: 3,
  //   imageRef: splashImage,
  //   title: "Заголовок новости №3",
  //   subtitle: "",
  //   description: `(Описание новости) Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  // },
  // {
  //   id: 4,
  //   imageRef: splashImage,
  //   title: "Заголовок новости №4",
  //   description: `(Описание новости) Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  // },
];

export const getSomeNews = async () => {
  // try {
  //   const response = await axios.get('news/getNRandom/2');
  //   return response.data;
  // } catch (err) {
  //   return [];
  // }
   return allNews.slice(0, 3);
};


export const getAllNews = async () => {
  // try {
    const response = await axios.get(`news`);
    return response.data;
  // } catch (err) {
  //   return [];
  // }
};

export const addNew = async (formData, token) => {
  try {
    const res = await axios.post('news/addNews', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
    return null;
  }
};

export const updateNew = async (newId, fotmData, token) => {
  try {
    const res = await axios.put(`news/${newId}`, fotmData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
    return null;
  }
};

export const deleteNew = async (newId, token) => {
  try {
    const res = await axios.delete(`news/${newId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
    return null;
  }
};