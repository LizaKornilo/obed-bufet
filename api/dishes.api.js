import { axios } from "./default-axios.api";
// import { categories } from "./trash";
export const categories = [{
  id: 1,
  name: "Обеды",
  imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
},
{
  id: 2,
  name: "Банкеты",
  imageRef: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
},
{
  id: 3,
  name: "Корпоративное питание",
  imageRef: "https://images.unsplash.com/photo-1525265332434-d52e2314161d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
},
];

// const splashImage = "https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const lanchDishes = [{
  id: 1,
  imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
  // imageRef: 'https://www.edimdoma.ru/system/images/contents/0001/4327/wide/imgonline-com-ua-Compressed-mggt8d6J2HdP.jpg?1635779395',
  name: "Салат из белокочанной капусты с маслом растительным",
  description: "Капуста белокочанная, Морковь, Сахар, Уксус, Масло подс., Соль, Перец чёрный молотый, Петрушка свежая, Укроп свежий",
  price: "2,08",
  weight: "100 г",
  categoryId: 1,
},
{
  id: 2,
  imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
  // imageRef: "https://saveda.ru/wp-content/uploads/2020/03/Bystryj-salat-iz-morkovi-i-svekly.-Dva-varianta.jpg",
  name: "Салат из свеклы",
  description: "Свекла , Лук репчатый, Соль , Масло подсолнечное , Петрушка свежая , Укроп свежий",
  price: "1,43",
  weight: "100 г",
  categoryId: 1,
},
{
  id: 3,
  imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",

  // imageRef: "https://mircooking.ru/wp-content/uploads/2018/03/72f1b7aa5b1a6c8b4020603a3e96d4e4.jpg",
  name: "Салат из свежих огурцов со сметаной",
  description: "Огурцы свежие, Сметана , Соль, Петрушка свежая , Укроп свежий",
  price: "1,95",
  weight: "100 г",
  categoryId: 1,
},
{
  id: 4,
  imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",

  // imageRef: "https://static.1000.menu/img/content-v2/c0/44/38765/fasolevyi-sup-iz-krasnoi-fasoli_1629532093_2_max.jpg",
  name: "Суп фасолевый",
  description: "Картофель, Фасоль белая, Морковь, Лук репчатый, Масло подсолнечное, Соль, Перец черный горошек, Лавровый лист , Петрушка свежая , Укроп свежий",
  price: "1,76",
  weight: "250 г",
  categoryId: 1,
},
{
  id: 5,
  imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",

  // imageRef: "https://www.patee.ru/r/x6/0c/8d/64/960x.jpg",
  name: "Суп перловый",
  description: "Вода питьевая, Картофель , Крупа ячменная перловая, Морковь, Лук репчатый, Масло подсолнечное, Соль , Перец чёрный молотый, Кнорр, Укроп свежий, Сметана",
  price: "1,56",
  weight: "250 г",
  categoryId: 1,
},
{
  id: 6,
  imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",

  // imageRef: "https://www.gastronom.ru/binfiles/images/00000042/00034000.jpg",
  name: "Свинина, запечённая с грибами",
  description: "Корейка, Грибы Шампиньоны, Лук репчатый, Масло подсолнечное, Чеснок, Сыр Российский новый» экстра , Майонез, Соль, Перец чёрный молотый, Приправа КУХАРЕК",
  price: "8,58",
  weight: "120 г",
  categoryId: 1,
},
  // {
  //   id: 7, imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",

  //   // imageRef: null,
  //   name: "Велинготон из свинины",
  //   description: "Тесто слоеное пресное, Корейка, Лук репчатый, Грибы Шампиньоны, Соус соевый, Майоран сушеный, Соль, Перец чёрный молотый, Приправа для мяса , Масло подс., Соус «Бешамель»",
  //   price: "4,29",
  //   weight: "150 г",
  //   categoryId: 1,
  // },
  // {
  //   id: 8,
  //   imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",

  //   // imageRef: null,
  //   name: "Оладьи из печени",
  //   description: "П/ф Печеночный говяжий, Батон, Масло Сладкосливочное, Масло подсолнечное, Соль, Перец чёрный молотый",
  //   price: "2,99",
  //   weight: "100 г",
  //   categoryId: 1,
  // },
];

const banketDishes = [
  // {
  //   id: 1,
  //   imageRef: null,
  //   name: "Канапе с семгой",
  //   description: "Необязательное короткое описание",
  //   price: "4,7",
  //   weight: "(Вес - необязательно)",
  // },
  {
    id: 100,
    imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",

    name: "Канапе с икрой",
    price: "6,4",
    categoryId: 2,
  },
  {
    id: 101,
    imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",

    name: "Сельдь соленая собственного посола",
    price: "3,1",
    categoryId: 2,
  },
  // {
  //   id: 4,
  //   imageRef: null,
  //   name: "галантин-горбуша",
  //   price: "5,9",
  // },
  // {
  //   id: 5,
  //   imageRef: null,
  //   name: "рулет 'Рыбацкий'",
  //   price: "4,9",
  // },
  // {
  //   id: 6,
  //   imageRef: null,
  //   name: "Горбуша фаршированная",
  //   price: "4,8",
  // },
  // {
  //   id: 7,
  //   imageRef: null,
  //   name: "Рыбный микс",
  //   price: "12,2",
  // },
  {
    id: 102,
    imageRef: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",

    name: "Ассорти заливное",
    price: "8,2",
    categoryId: 2,
  },
  // {
  //   id: 9,
  //   imageRef: splashImage,
  //   name: "Птица заливная",
  //   price: "3,4",
  // },
  // {
  //   id: 10,
  //   imageRef: splashImage,
  //   name: "Баклажаны с сыром",
  //   price: "6,8",
  // },
  // {
  //   id: 11,
  //   imageRef: splashImage,
  //   name: "Разносолы",
  //   price: "7,8",
  // },
  // {
  //   id: 12,
  //   imageRef: "https://telenok.by/d/miksiz_svezhih_ovoshchej.jpg",
  //   name: "Микс из свежих овощей",
  //   price: "6,3",
  //   categoryId: 2,
  // },

  // {
  //   id: 13,
  //   imageRef: splashImage,
  //   name: 'Мясной сэт',
  //   price: "13",
  // },
  // {
  //   id: 14,
  //   imageRef: splashImage,
  //   name: 'Плато "Гарадзенския прысмаки"',
  //   price: "13,4",
  // },
  // {
  //   id: 15,
  //   imageRef: splashImage,
  //   name: 'Помидоры с сыром и чесноком',
  //   price: "4,8",
  // },
  // {
  //   id: 16,
  //   imageRef: splashImage,
  //   name: 'Язык под майонезом',
  // //   price: "6,2",
  // // },
  // {
  //   id: 17,
  //   imageRef: "https://telenok.by/d/zapechennye_shampinony_pod_syrnoj_korochkoj.jpg",
  //   name: 'Шампиньоны, фаршированные ветчиной',
  //   price: "7,4",
  //   categoryId: 2,
  // },
  // // {
  // //   id: 18,
  // //   imageRef: splashImage,
  // //   name: 'Рулетики из ветчины',
  // //   price: "5,4",
  // // },
  // {
  //   id: 19,
  //   imageRef: "https://telenok.by/d/kapreze2.jpg",
  //   name: 'Закуска "Капрезе"',
  //   price: "6",
  //   categoryId: 2,
  // },
  // // {
  // //   id: 20,
  // //   imageRef: splashImage,
  // //   name: 'Шпажки фруктовые',
  // //   price: "4",
  // // },
  // // {
  // //   id: 21,
  // //   imageRef: splashImage,
  // //   name: 'Салат "Папараць-кветка"',
  // //   price: "5,4",
  // // },
  // // {
  // //   id: 22,
  // //   imageRef: splashImage,
  // //   name: 'Салат "праздничный"',
  // //   price: "5,2",
  // // },
  // // {
  // //   id: 23,
  // //   imageRef: splashImage,
  // //   name: 'Салат "Незнакомка"',
  // //   price: "6,2",
  // // },
  // // {
  // //   id: 24,
  // //   imageRef: splashImage,
  // //   name: 'Салат-коктейль из креветок',
  // //   price: "12",
  // // },
  // // {
  // //   id: 25,
  // //   imageRef: splashImage,
  // //   name: 'Салат из кальмаров с яблоками',
  // //   price: "5,6",
  // // },
  // // {
  // //   id: 26,
  // //   imageRef: splashImage,
  // //   name: 'Салат "Греческий"',
  // //   price: "6,8",
  // // },
  // // {
  // //   id: 27,
  // //   imageRef: splashImage,
  // //   name: 'Салат овощной с языком',
  // //   price: "5,1",
  // // },
  // // {
  // //   id: 28,
  // //   imageRef: splashImage,
  // //   name: 'Салат-коктейль с ветчиной и сыром',
  // //   price: "6,6",
  // // },
  // // {
  // //   id: 29,
  // //   imageRef: splashImage,
  // //   name: 'Салат "Белая русь"',
  // //   price: "7,1",
  // // },
  // // {
  // //   id: 30,
  // //   imageRef: splashImage,
  // //   name: 'Салат "Оригинальный"',
  // //   price: "4,4",
  // // },
  // // {
  // //   id: 31,
  // //   imageRef: splashImage,
  // //   name: 'Салат "Восторг"',
  // //   price: "7,2",
  // // },
  // // {
  // //   id: 32,
  // //   imageRef: splashImage,
  // //   name: 'Салат "Цезарь"',
  // //   price: "6,2",
  // // },
  // // {
  // //   id: 33,
  // //   imageRef: splashImage,
  // //   name: 'Салат "Конфетти"',
  // //   price: "5",
  // // },
  // {
  //   id: 34,
  //   imageRef: "https://telenok.by/d/salat_iz_kurinoj_grudki_i_imbirnoj_zapravkoj.jpg",
  //   name: 'Салат с куриной грудкой и имбирной заправкой',
  //   price: "6,8",
  //   weight: "100 г",
  //   categoryId: 2,
  // },
  // // {
  // //   id: 35,
  // //   imageRef: splashImage,
  // //   name: 'Салат с ростбифом',
  // //   price: "14,8",
  // // },
  // // {
  // //   id: 36,
  // //   imageRef: splashImage,
  // //   name: 'Овощи гриль',
  // //   price: "7",
  // // },
  // // {
  // //   id: 37,
  // //   imageRef: splashImage,
  // //   name: 'Дольки печеные',
  // //   price: "4,7",
  // // },
  // // {
  // //   id: 38,
  // //   imageRef: splashImage,
  // //   name: 'Фасоль, тушеная в томате',
  // //   price: "4,1",
  // // },
  // // {
  // //   id: 39,
  // //   imageRef: splashImage,
  // //   name: 'Овощной гарнир к мясу',
  // //   price: "5,2",
  // // },
  // // {
  // //   id: 40,
  // //   imageRef: splashImage,
  // //   name: 'Картофель фри',
  // //   price: "6",
  // // },
  // {
  //   id: 41,
  //   imageRef: "https://telenok.by/d/file_treski_v_teste_s_sousom_tartar.jpg",
  //   name: 'Рыба, жареная в тесте',
  //   description: "На фото представлено 2 порции.",
  //   price: "4,8",
  //   weight: "Холодная закуска. 220 г.",
  //   categoryId: 2,
  // },
  // // {
  // //   id: 42,
  // //   imageRef: splashImage,
  // //   name: 'Рыба, запеченная с грибами',
  // //   price: "9,9",
  // // },
  // // {
  // //   id: 43,
  // //   imageRef: splashImage,
  // //   name: 'Стейк из семги с лимонным соусом',
  // //   price: "22,5",
  // // },
  // // {
  // //   id: 44,
  // //   imageRef: splashImage,
  // //   name: 'Паргит из куриных ножек',
  // //   price: "9,8",
  // // },
  // {
  //   id: 45,
  //   imageRef: "https://telenok.by/d/utinaya_nozhka.jpg",
  //   name: 'Куриная ножка, запеченная с апельсином',
  //   price: "6,4",
  //   weight: "320 г",
  //   categoryId: 2,
  // },
  // {
  //   id: 46,
  //   imageRef: null,
  //   name: 'Чикен-ролл',
  //   price: "8,2",
  //   categoryId: 2,
  // },
  // {
  //   id: 47,
  //   imageRef: null,
  //   name: 'Шашлык из птицыс перцем',
  //   price: "8,6",
  //   categoryId: 2,
  // },
  // // {
  // //   id: 48,
  // //   imageRef: splashImage,
  // //   name: 'Филе "Трио"',
  // //   price: "7,5",
  // // },
  // // {
  // //   id: 49,
  // //   imageRef: splashImage,
  // //   name: 'Птица жареная',
  // //   price: "4,9",
  // // },
  // // {
  // //   id: 50,
  // //   imageRef: splashImage,
  // //   name: 'Филе из птицы в сыре',
  // //   price: "6,5",
  // // },
  // // {
  // //   id: 51,
  // //   imageRef: splashImage,
  // //   name: 'Стейк из свинины с соусом цацыки',
  // //   price: "9,9",
  // // },
  // // {
  // //   id: 52,
  // //   imageRef: splashImage,
  // //   name: 'Свинина, запеченная с грибами',
  // //   price: "9,5",
  // // },
  // // {
  // //   id: 53,
  // //   imageRef: splashImage,
  // //   name: 'Свинина, запеченная с помидорами',
  // //   price: "9,5",
  // // },
  // // {
  // //   id: 54,
  // //   imageRef: splashImage,
  // //   name: 'Талерка "Беларуски гасцинец"',
  // //   price: "18,2",
  // // },
  // // {
  // //   id: 55,
  // //   imageRef: splashImage,
  // //   name: 'Веллигтон из свинины',
  // //   price: "7,7",
  // // },
  // // {
  // //   id: 56,
  // //   imageRef: splashImage,
  // //   name: 'Запеченная куриная грудка в беконе',
  // //   price: "12,5",
  // // },
  // // {
  // //   id: 57,
  // //   imageRef: splashImage,
  // //   name: 'Шашлык из свинины',
  // //   price: "8,9",
  // // },
  // // {
  // //   id: 58,
  // //   imageRef: splashImage,
  // //   name: 'Морс клюквенный',
  // //   price: "70к",
  // // },
  // // {
  // //   id: 59,
  // //   imageRef: splashImage,
  // //   name: 'Морс черносмородиновый',
  // //   price: "70к",
  // // },
]


export const getCategories = async () => {
  // return categories
  const response = await axios.get('categories')
  return response.data
}

export const getNExampleDishes = async () => {
  const categoryId = 1;
  try {
    const response = await axios.get(`dishes/${categoryId}`);
    return response.data.slice(0, 5);
  } catch (err) {
    return []
  }
}

export const getDishesListByCategoryId = async (categoryId) => {
  //  return categoryId === 1 ? lanchDishes : banketDishes;
    const response = await axios.get(`dishes/${categoryId}`);
    return response.data;
}

export const addDish = async (formData, token) => {
  try {
    const res = await axios.post('dishes', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (err) {
    return null;
  }
};

export const updateDish = async (dishId, formData, token) => {
  try {
    const res = await axios.put(`dishes/${dishId}`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteDish = async (dishId, token) => {
  try {
    const res = await axios.delete(`dishes/${dishId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};