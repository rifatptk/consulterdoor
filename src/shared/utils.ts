const formatString = (
  str: string,
  {
    maxWords,
    titleCase,
    capitalCase,
    maxLength,
  }: {
    maxWords?: number;
    titleCase?: boolean;
    capitalCase?: boolean;
    maxLength?: number;
  } = {}
) => {
  let formattedString = str;

  if (titleCase) {
    const splitStr = formattedString.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    formattedString = splitStr.join(' ');
  }

  if (capitalCase) {
    formattedString =
      formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
  }

  if (maxWords) {
    const words = formattedString.split(' ');
    if (words.length > maxWords) {
      formattedString = words.slice(0, maxWords).join(' ');
    }
  }

  if (maxLength) {
    formattedString = formattedString.substring(0, maxLength);
  }

  return formattedString;
};

const getMonthName = (month: number) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[month];
};

export { formatString, getMonthName };
