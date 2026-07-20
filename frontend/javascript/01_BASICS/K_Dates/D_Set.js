/*
JavaScript Set Date Methods
Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

Set Date Methods
Set Date methods are used for setting a part of a date:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (yyyy)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
The setFullYear() Method
The setFullYear() method sets the year of a date object. In this example to 2020:

Example
const d = new Date("January 01, 2025");
d.setFullYear(2020);
The setFullYear() method can optionally set month and day:

Example
const d = new Date("January 01, 2025");
d.setFullYear(2020, 11, 3);
ADVERTISEMENT

REMOVE ADS

The setMonth() Method
The setMonth() method sets the month of a date object (0-11):

Example
const d = new Date("January 01, 2025");
d.setMonth(11);
The setDate() Method
The setDate() method sets the day of a date object (1-31):

Example
const d = new Date("January 01, 2025");
d.setDate(15);
The setDate() method can also be used to add days to a date:

Example
const d = new Date("January 01, 2025");
d.setDate(d.getDate() + 50);
Note
If adding days shifts the month or year, the changes are handled automatically by the Date object.

The setHours() Method
The setHours() method sets the hours of a date object (0-23):

Example
const d = new Date("January 01, 2025");
d.setHours(22);
The setHours() method can also be used to set minutes and seconds.

Example
const d = new Date("January 01, 2025");
d.setHours(22, 10, 20);
The setMinutes() Method
The setMinutes() method sets the minutes of a date object (0-59):

Example
const d = new Date("January 01, 2025");
d.setMinutes(30);
The setSeconds() Method
The setSeconds() method sets the seconds of a date object (0-59):

Example
const d = new Date("January 01, 2025");
d.setSeconds(30);
Compare Dates
Dates can easily be compared.

The following example compares today's date with January 14, 2100:

Example
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
Note
JavaScript counts months from 0 to 11. January is 0. December is 11.
*/