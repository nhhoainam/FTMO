const options: any = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false, // Use 24-hour format
};
const convert_date = (date: string) => {
  const dateRaw = new Date(date);
  return dateRaw.toLocaleDateString('vi-VN', options);
};

export default convert_date;
