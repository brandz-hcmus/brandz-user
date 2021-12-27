export const FormatVND = (pnumber) => {
  let result = '0';

  //  check the number has decimal
  if (pnumber % 1 > 0) {
    result = pnumber.toFixed(2);
  }

  result = pnumber.toString();
  result = result.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return result;
};

export const FormatPhoneNumber = (phone) => {
  //Filter only numbers from the input
  let cleaned = ('' + phone).replace(/\D/g, '');

  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + ' ' + match[3];
  }

  return null;
};

export const NumberToVND = (n) => {
  const t = [];
  // Get arguments, set defaults
  let p = 2;

  // Get number and decimal part of n
  n = Number(n).toFixed(p).split('.');

  // Add thousands separator and decimal point (if requied):
  for (
    let iLen = n[0].length, i = iLen ? iLen % 3 || 3 : 0, j = 0;
    i <= iLen;
    i += 3
  ) {
    t.push(n[0].substring(j, i));
    j = i;
  }
  // Insert separators and return result
  return t.join('.') + ' đ';
};
