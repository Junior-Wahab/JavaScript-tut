let x;
x = new Date();

// x = x.getFullYear();

// month is going to be 0 based
// x = x.getMonth();

// get day of the month
// x = x.getDate();

// get day of the week
// x = x.getDay();

// Time
// x = x.getHours();
// x = x.getMinutes();
// x = x.getSeconds();
// x = x.getMilliseconds();

// extract date from methods
// x = `${x.getFullYear()} - ${x.getMonth()} - ${x.getDate()}`;

// Default is US
// x = Intl.DateTimeFormat("en-US").format(x);
// x = Intl.DateTimeFormat("en-GB").format(x);

// month
// x = Intl.DateTimeFormat("en-GB", { month: "long" }).format(x);
// or
// x = x.toLocaleString("en-GB", { month: "long" });

x = x.toLocaleString("en-GB", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "UTC",
});

console.log(x);
