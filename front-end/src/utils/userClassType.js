const userClassType = (value) => {
  const familyIncome = parseFloat(value);

  if (familyIncome <= 980) {
    return 'Class A';
  } if (familyIncome > 980 && familyIncome <= 2500) {
    return 'Class B';
  }
  return 'Class C';
};

export default userClassType;
