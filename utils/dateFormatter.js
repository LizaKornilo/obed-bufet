export const getDateString = (date) => {
  const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ];

  return `
  ${date.getDate()}
  ${monthNames[date.getMonth()]}

  ${date.getYear() + 1900}
  в
  ${date.getHours()}:
  ${date.getMinutes()}`;
};