let d;
d = new Date();

// change to string
d = d.toString();

// set specific day
// month is 0 based so January is 0
d = new Date(2024, 6, 10);

// This format is not 0 based
// T = time
d = new Date("2021-07-10T12:30");
d = new Date("07/10/2024 12:30");
d = new Date("07-10-2024 12:50");

// Time stamp: used to track when data was created, modified, or accessed.
// By defaullt time stamp are in milliseconds
d = Date.now();

// time stamp of a specific date
d = new Date("07-10-2022 12:00");
d = d.getTime();
// or
d = d.valueOf();

// create date object from a time stamp
d = new Date(1657454400000);

// covert time stamp to seconds
d = Math.floor(Date.now() / 1000);

d = console.log(d);
