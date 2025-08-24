export const parseDate = (date: string, format: string) => {
  const [year, month, day] = date.split("-");

  switch (format.toLocaleLowerCase()) {
    case "year":
      return year;

    case "month":
      return month;

    case "day":
      return day;
  }
};
