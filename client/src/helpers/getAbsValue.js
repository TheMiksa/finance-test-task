const getAbsValue = number => number.toString().split('').filter(element => element !== '-').join('');

export default getAbsValue;
