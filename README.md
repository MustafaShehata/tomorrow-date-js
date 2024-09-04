# Tomorrow's Date Calculator

## Overview

The **Tomorrow's Date Calculator** is a JavaScript console application that takes a date input from the user in the format `DD/MM/YYYY` and calculates the date for the following day. The application handles various edge cases such as month-end and year-end transitions, ensuring accurate and reliable results. It also includes robust input validation to manage incorrect or invalid date formats.

## Features

- **Date Input:** Accepts a date from the user in the format `DD/MM/YYYY`.
- **Date Validation:** Ensures that the provided date is valid, checking for:
  - Correct format (`DD/MM/YYYY`).
  - Valid day, month, and year values.
  - Proper handling of leap years.
- **Date Calculation:** Computes the next day's date, accounting for:
  - Transition from the end of a month to the beginning of the next month.
  - Transition from the end of the year to the beginning of the next year.
- **Error Handling:** Provides informative error messages if the input date is invalid or improperly formatted.

## How It Works

1. **Input Collection:**
   - The user is prompted to enter a date in the format `DD/MM/YYYY`.

2. **Validation:**
   - The application checks if the input follows the `DD/MM/YYYY` format.
   - It verifies that the day, month, and year are within valid ranges.
   - For February, the application checks if the year is a leap year to determine the correct number of days.

3. **Date Calculation:**
   - The application calculates the next day's date by:
     - Incrementing the day if it's not the end of the month.
     - Resetting the day to `1` and incrementing the month if it's the end of the month.
     - Resetting the month to `1` and incrementing the year if it's the end of the year.

4. **Output:**
   - The calculated next day is displayed in the `DD/MM/YYYY` format.
   - If the input is invalid, the application will display an error message and prompt the user to enter a correct date.

## Installation

To run the Tomorrow's Date Calculator, follow these steps:

1. **Clone the Repository:**

```bash
git clone https://github.com/MustafaShehata/tomorrow-date-js.git
```

2. **Navigate to the Project Directory:**
```bash
cd tomorrow-date-js
```

3. **Run the Application**

You can run the application in JavaScript environment such as the browser console.

- Using Browser Console:
  - Open ```index.html``` in a web browser.
  - Open the Developer Tools (usually by pressing ```F12```).
  - Navigate to the console tab (usually you will be inside it).
  - The application will prompt you to enter a date and will display tomorrow's date.

---
