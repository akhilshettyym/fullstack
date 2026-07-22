/*
JavaScript Get Date Methods
The new Date() Constructor
In JavaScript, date objects are created with new Date().

new Date() returns a date object with the current date and time.

Get the Current Time
const date = new Date();
Date Get Methods
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
Note 1
The get methods above return Local time.

Universal time (UTC) is documented at the bottom of this page.

Note 2
The get methods return information from existing date objects.

In a date object, the time is static. The "clock" is not "running".

The time in a date object is NOT the same as current time.

The getFullYear() Method
The getFullYear() method returns the year of a date as a four digit number:

Examples
const d = new Date("2021-03-25");
d.getFullYear();
const d = new Date();
d.getFullYear();
Warning !
Old JavaScript code might use the non-standard method getYear().

getYear() is supposed to return a 2-digit year.

getYear() is deprecated. Do not use it!

The getMonth() Method
The getMonth() method returns the month of a date as a number (0-11).

Note
In JavaScript, January is month number 0, February is number 1, ...

Finally, December is month number 11.

Examples
const d = new Date("2021-03-25");
d.getMonth();
const d = new Date();
d.getMonth();
Note
You can use an array of names to return the month as a name:

Examples
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
let month = months[d.getMonth()];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
The getDate() Method
The getDate() method returns the day of a date as a number (1-31):

Examples
const d = new Date("2021-03-25");
d.getDate();
const d = new Date();
d.getDate();
ADVERTISEMENT

REMOVE ADS

The getHours() Method
The getHours() method returns the hours of a date as a number (0-23):

Examples
const d = new Date("2021-03-25");
d.getHours();
const d = new Date();
d.getHours();
The getMinutes() Method
The getMinutes() method returns the minutes of a date as a number (0-59):

Examples
const d = new Date("2021-03-25");
d.getMinutes();
const d = new Date();
d.getMinutes();
The getSeconds() Method
The getSeconds() method returns the seconds of a date as a number (0-59):

Examples
const d = new Date("2021-03-25");
d.getSeconds();
const d = new Date();
d.getSeconds();
The getMilliseconds() Method
The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

Examples
const d = new Date("2021-03-25");
d.getMilliseconds();
const d = new Date();
d.getMilliseconds();
The getDay() Method
The getDay() method returns the weekday of a date as a number (0-6).

Note
In JavaScript, the first day of the week (day 0) is Sunday.

Some countries in the world consider the first day of the week to be Monday.

Examples
const d = new Date("2021-03-25");
d.getDay();
const d = new Date();
d.getDay();
Note
You can use an array of names, and getDay() to return weekday as a name:

Examples
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date("2021-03-25");
let day = days[d.getDay()];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
The getTime() Method
The getTime() method returns the number of milliseconds since January 1, 1970:

Examples
const d = new Date("1970-01-01");
d.getTime();
const d = new Date("2021-03-25");
d.getTime();
const d = new Date();
d.getTime();
The Date.now() Method
Date.now() returns the number of milliseconds since January 1, 1970.

Examples
let ms = Date.now();
Calculate the number of years since 1970/01/01:

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
Date.now() is a static method of the Date object.

You cannot use it on a date object like myDate.now().

The syntax is always Date.now().

UTC Date Get Methods
Method	Same As	Description
getUTCDate()	getDate()	Returns the UTC date
getUTCFullYear()	getFullYear()	Returns the UTC year
getUTCMonth()	getMonth()	Returns the UTC month
getUTCDay()	getDay()	Returns the UTC day
getUTCHours()	getHours()	Returns the UTC hour
getUTCMinutes()	getMinutes()	Returns the UTC minutes
getUTCSeconds()	getSeconds()	Returns the UTC seconds
getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds
UTC methods use UTC time (Coordinated Universal Time).

UTC time is the same as GMT (Greenwich Mean Time).

The difference between Local time and UTC time can be up to 24 hours.


The getTimezoneOffset() Method
The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:

Example
let diff = d.getTimezoneOffset();
 */