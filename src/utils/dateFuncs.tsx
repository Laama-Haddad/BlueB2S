export const convertTimestampToDate = timestamp => {
  let d = new Date(timestamp * 1000);
  let date = {
    day: d.getDate(),
    month: d.getMonth() + 1,
    year: d.getFullYear(),
    hours: d.getHours(),
    minutes: d.getMinutes(),
    seconds: d.getSeconds(),
  };
  return date;
};
