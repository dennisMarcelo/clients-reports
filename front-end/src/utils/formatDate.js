const months = ['JAN', 'FER', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
const formaDate = (date) => {
  if (date) {
    const year = date.split('-')[0];
    const month = date.split('-')[1];

    return `${months[month - 1]}/${year}`;
  }

  return date;
};

export default formaDate;
