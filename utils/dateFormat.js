const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const currentDate = new Date();
const dayOfWeek = days[currentDate.getDay()];
const month = months[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const formattedDate = `${dayOfWeek}, ${month} ${date} ${year} ${hours}:${minutes}:${seconds}`;

export default formattedDate;
