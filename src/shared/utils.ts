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

const getTimeSlots = (selectedDate: Date, duration: number) => {
  const timeSlots = [];
  let startMinutes = 0;
  if (
    new Date(selectedDate).valueOf() < new Date().setHours(0, 0, 0, 0).valueOf()
  ) {
    return [];
  }
  if (
    new Date(selectedDate).valueOf() ===
    new Date().setHours(0, 0, 0, 0).valueOf()
  ) {
    const todayHours = new Date().getHours();
    const todayMinutes = new Date().getMinutes();

    startMinutes = todayHours * 60 + todayMinutes;
    startMinutes = startMinutes - (startMinutes % duration) + duration;
  }
  let previousTime;
  let previousDate;
  for (let i = startMinutes; i <= 1440; i += duration) {
    const hours = i / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    const time = new Date(new Date().setHours(rhours, rminutes)).toLocaleString(
      'en-US',
      { hour: 'numeric', minute: 'numeric', hour12: true }
    );
    if (previousTime && previousDate) {
      timeSlots.push({
        time: `${previousTime} - ${time}`,
        date: previousDate,
      });
    }
    previousTime = time;
    previousDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      rhours,
      rminutes,
      0
    );
  }
  return timeSlots;
};

const convertTime12to24 = (timeString: string) => {
  const [time, modifier] = timeString.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = (parseInt(hours, 10) + 12).toString();
  }
  hours = parseInt(hours, 10).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  minutes = parseInt(minutes, 10).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return `${hours}:${minutes}:00`;
};

export { formatString, getMonthName, getTimeSlots, convertTime12to24 };
