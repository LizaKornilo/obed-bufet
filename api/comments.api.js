import { axios } from "./default-axios.api";

// interface reviews{
// id: Number,
// userId: Number,
// createTime: String,
// text: String
//}

// interface user{
// id: Number,
// name: String,
// email: String,
// phone: String
//}

// ------------------------------------

// interface comments{
// id: Number,
// userName: Number,
// createTime: String,
// text: String
//for admin:
//userEmail: String, allow NULL
//userPhone: String,
//adminAnswer: String, allow NULL
//}
const commentsForAdmin = [
  {
    id: 1,
    userName: "Наталья",
    createTime: "12 Апреля 2022 в 15:40",
    text: "Добрый день, отмечали в бистро день рождение! Понравилось всё! Заведение выбрали специально, после обновления были впервые. Любим посещать новые заведения и спасибо бистро: за вкусные блюда, приятную атмосферу, внимательный персонал. Отдельная благодарность нашему официанту Наталье, по-настоящему профессиональная работа. Спасибо",
    userEmail: "natalua@gmail.com",
    userPhone: "+375333548823",
    adminAnswer: null,
  }, {
    id: 2,
    userName: "Ольга",
    createTime: "15 Апреля 2022 в 11:08",
    text: "В бистро отмечала свой юбилей. Спасибо большое сотрудникам ресторана. Мне и моим гостям очень понравилось кухня, музыка отменная, фотосессия от Михаила просто супер. Отдельное спасибо официантке Екатерине. Все было на профессиональном уровне. СПАСИБО!",
    userEmail: null,
    userPhone: "+375294583394",
    adminAnswer: "Ольга, благодарим вас за отзыв. Нам очень приятно. Будем рады видеть вас и ваших друзей еще!",
  },
  {
    id: 3,
    userName: "Владимир",
    createTime: "", 
    text: "Обеденное меню просто божественное! Вкусное, сытное! Большое спасибо!",
    userEmail: null,
    userPhone: "+375333475569",
    adminAnswer: null,
  },
];
const commentsForUser = [
  {
    id: 1,
    userName: "Наталья",
    createTime: "12 Апреля 2022 в 15:40",
    text: "Добрый день, отмечали в бистро день рождение! Понравилось всё! Заведение выбрали специально, после обновления были впервые. Любим посещать новые заведения и спасибо бистро: за вкусные блюда, приятную атмосферу, внимательный персонал. Отдельная благодарность нашему официанту Наталье, по-настоящему профессиональная работа. Спасибо",
    adminAnswer: null,
  }, {
    id: 2,
    userName: "Ольга",
    createTime: "15 Апреля 2022 в 11:08",
    text: "В бистро отмечала свой юбилей. Спасибо большое сотрудникам ресторана. Мне и моим гостям очень понравилось кухня, музыка отменная, фотосессия от Михаила просто супер. Отдельное спасибо официантке Екатерине. Все было на профессиональном уровне. СПАСИБО!",
    adminAnswer: "Ольга, благодарим вас за отзыв. Нам очень приятно. Будем рады видеть вас и ваших друзей еще!",
  },
];

export const getComments = async (token) => {
  return (token)
    ? (
      // try {
      //   const response = await $authHost.get('reviews/getAllForAdmin')
      //   return response.data
      // } catch (err) {
      //   console.log(err)
      //   return []
      // }
      commentsForAdmin
    )
    : (
      // try {
      //   const response = await $host.get('reviews/getAllForClient')
      //   return response.data
      // } catch (err) {
      //   console.log(err)
      //   return []
      // }
      commentsForUser
    );
};


export const addCommentApi = async (newComment) => {
  // try {
  //   const response = await $host.get('reviews/add')
  // } catch (err) {
  //   console.log(err)
  // }
  commentsForUser.push({
    id: 10,// omg
    userName: newComment.userName,
    createTime: newComment.createTime,
    text: newComment.text,
    adminAnswer: null,
  });
  commentsForAdmin.push({
    id: 10,// omg
    userName: newComment.userName,
    createTime: newComment.createTime,
    text: newComment.text,
    adminAnswer: null,
    userEmail: newComment.userEmail ? newComment.userEmail : null,
    userPhone: newComment.userPhone,
  });
  // throw "ошибочка на сервере: не удалось добавить отзыв";
}


export const changeAdminAnswer = async (commentId, adminAnswerDto, token) => {
  // try {
  //   const res = await axios.patch(`comments/change-admin-answer/${commentId}`, adminAnswerDto, {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //     }
  //   });
  //   return res.data;
  // } catch (err) {
  //   console.log(err);
  //   return null;
  // }
};