function isValidDateFormat(input) {
  if (!input) {
    return "Empty Input, enter DATE!";
  }
  const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateFormat.test(input);
}

function isValidDate(day, month, year) {
  // Validate month range
  if (month < 1 || month > 12) {
    return false;
  }

  // Validate day range
  const daysInCurrentMonth = getDaysInMonth(month, year);
  if (day < 1 || day > daysInCurrentMonth) {
    return false;
  }

  // Validate year range (e.g., limit to the current year or reasonable range)
  const currentYear = new Date().getFullYear();
  if (year < 1 || year > currentYear) {
    return false;
  }

  return true;
}

function parseDate(input) {
  const [day, month, year] = input.split("/").map(Number);
  return { day, month, year };
}

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(month, year) {
  // February
  if (month === 2 && isLeapYear(year)) {
    return 29;
  }
  return daysInMonth[month - 1];
}

function getNextDay(date) {
  let { day, month, year } = date;
  const daysInCurrentMonth = getDaysInMonth(month, year);

  if (day < daysInCurrentMonth) {
    day++;
  } else {
    day = 1;
    if (month < 12) {
      month++;
    } else {
      month = 1;
      year++;
    }
  }

  return { day, month, year };
}

function formatDate(date) {
  const day = String(date.day).padStart(2, "0");
  const month = String(date.month).padStart(2, "0");
  return `${day}/${month}/${date.year}`;
}

function getTomorrowsDate(input) {

  if(!input) {
    return "Empty input. Enter VALID DATE!";
  }

  if (!isValidDateFormat(input)) {
    return "Invalid date format. Please enter the date in dd/mm/yyyy format.";
  }

  const date = parseDate(input);
  if (!isValidDate(date.day, date.month, date.year)) {
    return "Invalid date. Please enter a valid day, month, year.";
  }

  const tomorrow = getNextDay(date);
  return formatDate(tomorrow);
}

const input = prompt("Enter a date (DD/MM/YYYY):");
const tomorrow = getTomorrowsDate(input);
console.log(tomorrow);