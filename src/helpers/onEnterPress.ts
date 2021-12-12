const ENTER_KEY = "Enter";

const onEnterPress = (
  e: React.KeyboardEvent<HTMLElement>,
  callback: () => void
) => {
  if (e.key === ENTER_KEY) callback();
};

export default onEnterPress;
