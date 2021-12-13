const formatDateToTime = (dateString: string) => {
  const date = new Date(dateString);
  const time = new Intl.DateTimeFormat('default', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  }).format(date);

  return time;
};

export default formatDateToTime;
