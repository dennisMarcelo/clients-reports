const userClassTypeColor = (value) => {
  const familyIncome = parseFloat(value);

  if (familyIncome <= 980) {
    return 'background-red';
  } if (familyIncome > 980 && familyIncome <= 2500) {
    return 'background-yellow';
  }
  return 'background-green';
};

export default userClassTypeColor;
