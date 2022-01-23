const getCurrentDateFormated = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const monthFormated = month > 10 ? month : `0${month}`;
  const dayFormated = day > 10 ? day : `0${day}`;

  return `${year}-${monthFormated}-${dayFormated}`;
};

export default getCurrentDateFormated;
