import keyCodes from "./keyCodes";

export const handleClickOutsideAndEsc: any = (ref: any, frame: any) => {
    const handleClick = (event: any) => {
      const element = document.getElementsByClassName('popup-content')[0];
  
      if (!element) {
        if (ref.current && !ref.current.contains(event.target)) {
          frame(false);
        }
      }
    };
  
    const handleEscapeKeyPressed = (event: any) => {
      if (event.keyCode === keyCodes.ESC) {
        frame(false);
      }
    };
  
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEscapeKeyPressed);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEscapeKeyPressed);
    };
  };