const onKeyPress = (
  e: React.KeyboardEvent<HTMLElement> | KeyboardEvent,
  callback: () => void,
  key: string,
) => {
  if (e.key === key) callback();
};

export default onKeyPress;
